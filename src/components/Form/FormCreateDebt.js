import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Dropdown from "react-bootstrap/Dropdown";
import {sendDebtRequestRequest} from "../../actions/debt-requests-actions";
import {getGroupsRequest} from "../../actions/groups-actions";
import {getAllFriendsRequest} from "../../actions/friends-actions";
import './index.css'


function FormCreateDebt(props) {
    const [validated, setValidated] = useState(false);
    const [amount, setAmount] = useState(0);
    const [amountPerPerson, setAmountPerPerson] = useState((0).toFixed(2));
    const [selectedGroup, setSelectedGroup] = useState();
    const [comment, setComment] = useState('');
    const [personsForSelect, setPersonsForSelect] = useState([]);
    const [checkboxes, setCheckboxes] = useState([]);
    const [selectedPersons, setSelectedPersons] = useState([]);

    useEffect(() => {
        props.getFriends();
        props.getGroups();
    }, []);

    useEffect(() => {
        setPersonsForSelect(props.friends);
    }, [props.friends]);

    useEffect(() => {
        setCheckboxes(personsForSelect.map(person => ({person, checked: false})));
    }, [personsForSelect]);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            props.sendDebtRequest({
                orders: selectedPersons.map(person => ({
                    receiver: {id: person.id},
                    amount: amountPerPerson,
                })),
                comment: comment,
            });
            props.onSubmit();
        }

        setValidated(true);
    };

    const onSelectGroup = group => {
        setSelectedGroup(group);
        setPersonsForSelect(group.members);
    };

    const onSelectNone = () => {
        setPersonsForSelect(props.friends);
        setSelectedGroup(null)
    };

    const onChangeAmount = newAmount => {
        setAmount(newAmount);
        const numberOfSelectedPersons = checkboxes.filter(c => c.checked).length;
        const newAmountPerPerson = (newAmount / numberOfSelectedPersons);
        const fixedNewAmountPerPerson = Number.isNaN(newAmountPerPerson) || !Number.isFinite(newAmountPerPerson)
            ? (0).toFixed(2)
            : newAmountPerPerson.toFixed(2);
        setAmountPerPerson(fixedNewAmountPerPerson);
    };

    const toggleCheckbox = checkbox => {
        setCheckboxes(checkboxes.map(c => {
            if (c.person.id === checkbox.person.id) {
                c.checked = !c.checked;
            }
            return c;
        }));
        setSelectedPersons(checkboxes.filter(c => c.checked).map(c => c.person));
        onChangeAmount(amount);
    };

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
                type="number"
                required
                onChange={event => onChangeAmount(event.target.value)}
                value={amount}
            />
            <Form.Text className="text-muted">{amountPerPerson} per person</Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Groups</Form.Label><br/>
            <Dropdown className='w-100'>
                <Dropdown.Toggle
                    className='w-100'
                    variant='light'
                    id='group-select'
                >
                    {selectedGroup ? selectedGroup.title : 'None'}
                </Dropdown.Toggle>
                <Dropdown.Menu
                    id='group-select'
                    variant="light"
                    className='w-100'
                >
                    <Dropdown.Item onClick={onSelectNone}>None</Dropdown.Item>
                    {
                        props.groups.map(group =>
                            <Dropdown.Item key={group.id} onClick={() => onSelectGroup(group)}>
                                {group.title}
                            </Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        <Form.Group controlId="friends">
            <Form.Label>Friends</Form.Label>
            <div className='w-100 vh-15 border p-1'>
                {
                    checkboxes.map(checkbox =>
                        <Form.Check
                            type='checkbox'
                            key={checkbox.person.id}
                            onChange={() => toggleCheckbox(checkbox)}
                            checked={checkbox.checked}
                            label={checkbox.person.username}
                        />
                    )
                }
            </div>
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

const mapStateToProps = state => ({
    groups: state.groups.groups,
    friends: state.friends,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    sendDebtRequest: sendDebtRequestRequest,
    getGroups: getGroupsRequest,
    getFriends: getAllFriendsRequest,
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(FormCreateDebt);

export {connectedComponent as FormCreateDebt};