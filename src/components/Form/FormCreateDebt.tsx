/* eslint no-use-before-define: 0 */

import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { FormControl } from 'react-bootstrap';
import { sendDebtRequestRequest } from '../../actions/debt-requests-actions';
import { getGroupsRequest } from '../../actions/groups-actions';
import { getAllFriendsRequest } from '../../actions/friends-actions';
import { Group, User } from '../../types/response';
import { State } from '../../types/redux';
import { DebtRequestPayload } from '../../types/request';

interface StateProps {
  groups: Group[];
  friends: User[];
}

interface DispatchProps {
  sendDebtRequest(request: DebtRequestPayload): void;
  getGroups(): void;
  getFriends(): void;
}

interface OwnProps {
  onSubmit(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface Checkbox {
  person: User;
  checked: boolean;
}

function FormCreateDebt(props: Props): JSX.Element {
  const { friends, groups } = props;

  const [validatedForm, setValidatedForm] = useState(false);
  const [validatedAmount, setValidatedAmount] = useState(true);
  const [validatedFriends, setValidatedFriends] = useState(true);
  const [amount, setAmount] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState<number>(0);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>();
  const [comment, setComment] = useState('');
  const [personsForSelect, setPersonsForSelect] = useState<User[]>([]);
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([]);
  const [selectedPersons, setSelectedPersons] = useState<User[]>([]);

  useEffect(() => {
    if (!friends.length) {
      props.getFriends();
    }
    if (!groups.length) {
      props.getGroups();
    }
  }, []);

  useEffect(() => {
    setPersonsForSelect(friends);
  }, [friends]);

  useEffect(() => {
    const selectedPersonsIds = selectedPersons.map(p => p.id);
    const newCheckboxes = personsForSelect.map(person => ({
      person,
      checked: selectedPersonsIds.includes(person.id),
    }));
    setCheckboxes(newCheckboxes);
  }, [personsForSelect]);

  useEffect(() => {
    setSelectedPersons(checkboxes.filter(c => c.checked).map(c => c.person));
  }, [checkboxes]);

  useEffect(() => {
    updateAmountPerPerson();
  }, [amount, selectedPersons]);

  useEffect(() => {
    if (validatedForm && validatedFriends) {
      sendRequest();
    }
    setValidatedForm(false);
  }, [validatedForm, validatedFriends]);

  const sendRequest = (): void => {
    props.sendDebtRequest({
      orders: selectedPersons.map(person => ({
        receiver: { id: person.id },
        amount: amountPerPerson,
      })),
      comment,
    });
    props.onSubmit();
  };

  const validateFields = (): void => {
    setValidatedAmount(!!amount);
    setValidatedFriends(!!selectedPersons.length);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    setValidatedForm(form.checkValidity());
  };

  const onSelectGroup = (group: Group | null): void => {
    setSelectedGroup(group);
    setPersonsForSelect(group ? group.members : friends);
  };

  const onChangeAmount = (newAmount: string): void => {
    setAmount(parseFloat(parseFloat(newAmount).toFixed(2)));
  };

  const updateAmountPerPerson = (): void => {
    const numberOfSelectedPersons = selectedPersons.length;
    const newAmountPerPerson = amount / numberOfSelectedPersons;
    const fixedNewAmountPerPerson =
      Number.isNaN(newAmountPerPerson) || !Number.isFinite(newAmountPerPerson)
        ? '0'
        : newAmountPerPerson.toFixed(2);
    setAmountPerPerson(parseFloat(fixedNewAmountPerPerson));
  };

  const toggleCheckbox = (checkbox: Checkbox): void => {
    const newCheckboxes = checkboxes.map(c => {
      return c.person.id === checkbox.person.id
        ? {
            ...c,
            checked: !c.checked,
          }
        : c;
    });

    setCheckboxes(newCheckboxes);
    setValidatedFriends(true);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          required
          isInvalid={!validatedAmount}
          value={amount.toString()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            onChangeAmount(event.target.value);
            setValidatedAmount(true);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter an amount
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          {amountPerPerson.toFixed(2)} per person
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Groups</Form.Label>
        <br />
        <Dropdown className="w-100">
          <Dropdown.Toggle className="w-100" variant="light" id="group-select">
            {selectedGroup ? selectedGroup.title : 'None'}
          </Dropdown.Toggle>
          <Dropdown.Menu id="group-select" className="w-100">
            <Dropdown.Item onClick={(): void => onSelectGroup(null)}>
              None
            </Dropdown.Item>
            {groups.map(group => (
              <Dropdown.Item
                key={group.id}
                onClick={(): void => onSelectGroup(group)}
              >
                {group.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <Form.Group>
        <Form.Label>Members of debt</Form.Label>
        <div className="w-100 vh-15 border p-1 overflow-auto">
          {checkboxes.map(checkbox => (
            <Form.Check
              type="checkbox"
              key={checkbox.person.id}
              onChange={(): void => toggleCheckbox(checkbox)}
              checked={checkbox.checked}
              label={checkbox.person.username}
            />
          ))}
        </div>
        <FormControl className="d-none" isInvalid={!validatedFriends} />
        <Form.Control.Feedback type="invalid">
          Please choose one or more friends
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="comment">
        <Form.Control
          type="text"
          placeholder="Enter comment (optional)"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setComment(event.target.value)
          }
          autoComplete="off"
        />
      </Form.Group>

      <Row className="justify-content-center">
        <Button type="submit" variant="success">
          Send
        </Button>
      </Row>
    </Form>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  groups: state.groups.groups,
  friends: state.friends.list,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      sendDebtRequest: sendDebtRequestRequest,
      getGroups: getGroupsRequest,
      getFriends: getAllFriendsRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreateDebt);

export { connectedComponent as FormCreateDebt };
