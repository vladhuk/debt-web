import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AddFriendForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
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
                />
                <Form.Control.Feedback type="invalid">
                    User not founded
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>

        <Button type='submit' variant='success'>Add</Button>
    </Form>
}

export default AddFriendForm;