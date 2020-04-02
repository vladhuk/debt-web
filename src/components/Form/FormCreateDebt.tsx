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
    setCheckboxes(personsForSelect.map(person => ({ person, checked: false })));
  }, [personsForSelect]);

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

  useEffect(() => {
    if (validatedForm && validatedFriends) {
      sendRequest();
    }
    setValidatedForm(false);
  }, [validatedForm, validatedFriends]);

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

  const onSelectGroup = (group: Group): void => {
    setSelectedGroup(group);
    setPersonsForSelect(group.members);
    setSelectedPersons([]);
    setAmountPerPerson(0);
  };

  const onSelectNone = (): void => {
    setPersonsForSelect(friends);
    setSelectedGroup(null);
  };

  const onChangeAmount = (newAmount: number): void => {
    setAmount(newAmount);
    const numberOfSelectedPersons = checkboxes.filter(c => c.checked).length;
    const newAmountPerPerson = newAmount / numberOfSelectedPersons;
    const fixedNewAmountPerPerson =
      Number.isNaN(newAmountPerPerson) || !Number.isFinite(newAmountPerPerson)
        ? '0'
        : newAmountPerPerson.toFixed(2);
    setAmountPerPerson(parseFloat(fixedNewAmountPerPerson));
  };

  const toggleCheckbox = (checkbox: Checkbox): void => {
    const checkedCheckbox = checkboxes.find(
      c => c.person.id === checkbox.person.id
    );
    if (checkedCheckbox) {
      checkedCheckbox.checked = !checkedCheckbox.checked;
    }

    setSelectedPersons(checkboxes.filter(c => c.checked).map(c => c.person));
    onChangeAmount(amount);
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
            onChangeAmount(parseFloat(event.target.value));
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
            <Dropdown.Item onClick={onSelectNone}>None</Dropdown.Item>
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
