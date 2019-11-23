import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


function SignUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return <Container>
        <h1 className='text-center p-2'>Sign Up</h1>
        <Form className='mx-auto col-md-4' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="name" className='mb-0'>
                <Form.Label column={true}>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a name.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="username" className='mb-0'>
                <Form.Label column={true}>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='border rounded bg-light p-2 mt-3'>
                <Form.Group controlId="password">
                    <Form.Label column={true}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="confirm-password">
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Passwords do not match
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Group>

            <Button type='submit' variant='success' className='w-100'>Submit</Button>
        </Form>
    </Container>
}

export default SignUp;

