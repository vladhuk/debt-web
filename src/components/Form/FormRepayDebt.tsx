/* eslint no-use-before-define: 0 */

import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { FormControl } from 'react-bootstrap';
import { sendRepaymentRequestRequest } from '../../actions/repayment-requests-actions';
import { Debt } from '../../types/response';
import { RepaymentRequestPayload } from '../../types/request';

interface DispatchProps {
  sendRepaymentRequest(request: RepaymentRequestPayload): void;
}

interface OwnProps {
  debts: Debt[];
  onSubmit(): void;
}

type Props = DispatchProps & OwnProps;

function FormRepayDebt(props: Props): JSX.Element {
  const { debts } = props;

  const [validatedForm, setValidatedForm] = useState(false);
  const [validatedAmount, setValidatedAmount] = useState(true);
  const [validatedDebt, setValidatedDebt] = useState(true);
  const [amount, setAmount] = useState(0);
  const [selectedDebt, setSelectedDebt] = useState<Debt | null>(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (validatedForm && validatedDebt) {
      sendRequest();
    }
    setValidatedForm(false);
  }, [validatedForm, validatedDebt]);

  const sendRequest = (): void => {
    if (!selectedDebt) {
      setValidatedDebt(false);
      return;
    }

    props.sendRepaymentRequest({
      order: {
        receiver: { id: selectedDebt.partner.id },
        amount,
      },
      comment,
    });
    props.onSubmit();
  };

  const validateFields = (): void => {
    setValidatedAmount(!!amount);
    setValidatedDebt(!!selectedDebt);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    setValidatedForm(form.checkValidity());
  };

  const onChangeAmount = (newAmount: string): void => {
    setAmount(parseFloat(parseFloat(newAmount).toFixed(2)));
  };

  const onSelectDebt = (debt: Debt): void => {
    setSelectedDebt(debt);
    setAmount(Math.abs(debt.balance));
    setValidatedDebt(true);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Debts</Form.Label>
        <br />
        <Dropdown className="w-100">
          <Dropdown.Toggle id="debt-select" className="w-100" variant="light">
            {selectedDebt ? selectedDebt.partner.username : 'None'}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {debts.map(debt => (
              <Dropdown.Item
                key={debt.partner.id}
                onClick={(): void => onSelectDebt(debt)}
              >
                {debt.partner.username}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <FormControl className="d-none" isInvalid={!validatedDebt} />
        <Form.Control.Feedback type="invalid">
          Please choose one of your active debts
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
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
      </Form.Group>

      <Form.Group>
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

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      sendRepaymentRequest: sendRepaymentRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(null, mapDispatchToProps)(FormRepayDebt);

export { connectedComponent as FormRepayDebt };
