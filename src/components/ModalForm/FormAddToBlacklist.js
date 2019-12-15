import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {addToBlaklistRequest} from "../../actions/blacklist-actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function FormAddToBlacklist(props) {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            props.addToBlacklist({username});
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

        <Row className='justify-content-center'>
            <Button type='submit' variant='success'>Add</Button>
        </Row>
    </Form>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addToBlacklist: addToBlaklistRequest
}, dispatch);

const connectedComponent = connect(null, mapDispatchToProps)(FormAddToBlacklist);

export {connectedComponent as FormAddToBlacklist};