import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

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

        <Form.Group controlId="username">
            <Form.Control
                type="text"
                placeholder="Enter comment (optional)"
            />
        </Form.Group>

        <Row className='justify-content-center'>
        <Button type='submit' variant='success'>Send request</Button>
        </Row>
    </Form>
}

export default AddFriendForm;