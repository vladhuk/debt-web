import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendRepaymentRequestRequest} from "../../actions/repayment-requests-actions";
import Dropdown from "react-bootstrap/Dropdown";
import {FormControl} from "react-bootstrap";


function FormRepayDebt(props) {
    const [validatedForm, setValidatedForm] = useState(false);
    const [validatedAmount, setValidatedAmount] = useState(true);
    const [validatedDebt, setValidatedDebt] = useState(true);
    const [amount, setAmount] = useState(0);
    const [selectedDebt, setSelectedDebt] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (validatedForm && validatedDebt) {
            sendRequest();
        }
        setValidatedForm(false);
    }, [validatedForm, validatedDebt]);

    const sendRequest = () => {
        props.sendRepaymentRequest({
            order: {
                receiver: {id: selectedDebt.partner.id},
                amount: amount,
            },
            comment: comment,
        });
        props.onSubmit();
    };

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        validateFields();

        setValidatedForm(form.checkValidity());
    };

    const validateFields = () => {
        setValidatedAmount(!!amount);
        setValidatedDebt(!!selectedDebt);
    };

    const onSelectDebt = debt => {
        setSelectedDebt(debt);
        setAmount(Math.abs(debt.balance));
        setValidatedDebt(true);
    };

    return <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Debts</Form.Label><br/>
            <Dropdown className='w-100'>
                <Dropdown.Toggle
                    className='w-100'
                    variant='light'
                >
                    {selectedDebt ? selectedDebt.partner.username : 'None'}
                </Dropdown.Toggle>
                <Dropdown.Menu
                    variant="light"
                    required
                    className='w-100'
                >
                    {
                        props.debts.map(debt =>
                            <Dropdown.Item
                                key={debt.partner.id}
                                onClick={() => onSelectDebt(debt)}
                            >
                                {debt.partner.username}
                            </Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
            <FormControl
                className='d-none'
                isInvalid={!validatedDebt}
            />
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
                value={amount}
                onChange={event => {
                    setAmount(event.target.value);
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
                onChange={event => setComment(event.target.value)}
                autoComplete='off'
            />
        </Form.Group>

        <Row className='justify-content-center'>
            <Button type='submit' variant='success'>Send</Button>
        </Row>
    </Form>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    sendRepaymentRequest: sendRepaymentRequestRequest,
}, dispatch);

const connectedComponent = connect(null, mapDispatchToProps)(FormRepayDebt);

export {connectedComponent as FormRepayDebt};
