import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {signInRequest} from "../../../actions/auth-actions";
import {connect} from "react-redux";
import {setToken} from "../../../util";


function PageSignIn(props) {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (props.accessToken.length !== 0) {
            setToken(props.accessToken);
            props.history.push('/friends/all');
        }
    });

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            props.signIn({username, password});
        }

        setValidated(true);
    };

    return <Container>
        <h1 className='text-center p-2'>Sign In</h1>
        <Form className='mx-auto col-md-4' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="username" className='mb-0'>
                <Form.Label column={true}>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={event => setUsername(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label column={true}>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={event => setPassword(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a password.
                </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit' variant='success' className='w-100'>Submit</Button>
        </Form>
    </Container>
}

const mapStateToProps = state => ({
    accessToken: state.accessToken,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn: signInRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PageSignIn);

export {connectedComponent as PageSignIn};
