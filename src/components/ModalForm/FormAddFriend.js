import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {bindActionCreators} from "redux";
import {sendFriendRequestRequest} from "../../actions/friends-requests-actions";
import {connect} from "react-redux";

function FormAddFriend(props) {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            props.sendFriendRequest({username, comment});
            props.onSubmit();
        }

        setValidated(true);
    };

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="username">
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    required
                    onChange={event => setUsername(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    User not founded
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>

        <Form.Group controlId="comment">
            <Form.Control
                type="text"
                placeholder="Enter comment (optional)"
                onChange={event => setComment(event.target.value)}
            />
        </Form.Group>

        <Row className='justify-content-center'>
        <Button type='submit' variant='success'>Send request</Button>
        </Row>
    </Form>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    sendFriendRequest: sendFriendRequestRequest
}, dispatch);

const connectedComponent = connect(null, mapDispatchToProps)(FormAddFriend);

export {connectedComponent as FormAddFriend};