import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendRepaymentRequestRequest} from "../../actions/repayment-requests-actions";
import Dropdown from "react-bootstrap/Dropdown";


function FormRepayDebt(props) {
    const [validated, setValidated] = useState(false);
    const [amount, setAmount] = useState(0);
    const [selectedDebt, setSelectedDebt] = useState();
    const [comment, setComment] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            props.sendRepaymentRequest({
                order: {
                    receiver: {id: selectedDebt.partner.id},
                    amount: amount,
                },
                comment: comment,
            });
            props.onSubmit();
        }

        setValidated(true);
    };

    const onSelectDebt = debt => {
        setSelectedDebt(debt);
        setAmount(debt.balance);
    };

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Debts</Form.Label><br/>
            <Dropdown className='w-100'>
                <Dropdown.Toggle
                    className='w-100'
                    variant='light'
                    id='debt-select'
                >
                    {selectedDebt ? selectedDebt.partner.username : 'None'}
                </Dropdown.Toggle>
                <Dropdown.Menu
                    id='debt-select'
                    variant="light"
                    className='w-100'
                >
                    {
                        props.debts.map(debt =>
                            <Dropdown.Item key={debt.partner.id}
                                           onClick={() => onSelectDebt(debt)}
                            >
                                {debt.partner.username}
                            </Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
                type="number"
                required
                onChange={event => setAmount(event.target.value)}
                value={amount}
            />
        </Form.Group>

        <Form.Group controlId="comment">
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
