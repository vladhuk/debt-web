import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {cleanError, signInRequest} from "../../../actions/auth-actions";
import {connect} from "react-redux";
import {setToken} from "../../../util";
import {getCurrentUserRequest} from "../../../actions/users-actions";
import Alert from "react-bootstrap/Alert";


function PageSignIn(props) {
    const [validatedUsername, setValidatedUsername] = useState(true);
    const [validatedPassword, setValidatedPassword] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    useEffect(() => {
        if (props.accessToken) {
            setToken(props.accessToken);
            props.getCurrentUser();
            props.history.push('/friends/all');
        }
    }, [props.accessToken]);

    useEffect(() => {
        if (props.error) {
            setIsAlertVisible(true);
            props.cleanError();
        }
    }, [props.error]);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        setIsAlertVisible(false);
        checkFields();

        if (form.checkValidity()) {
            props.signIn({username, password});
        }
    };

    const checkFields = () => {
        setValidatedUsername(username.length);
        setValidatedPassword(password.length);
    };

    return <Container>
        <Alert className='w-50 mx-auto text-center mt-4' variant='danger' show={isAlertVisible}>
            Incorrect username or password
        </Alert>
        <h1 className='text-center p-2'>Sign In</h1>
        <Form className='mx-auto col-md-4' noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="username" className='mb-0'>
                <Form.Label column={true}>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoFocus
                    isInvalid={!validatedUsername}
                    onChange={event => {
                        setUsername(event.target.value);
                        setValidatedUsername(true);
                    }}
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
                    isInvalid={!validatedPassword}
                    onChange={event => {
                        setPassword(event.target.value);
                        setValidatedPassword(true);
                    }}
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
    accessToken: state.auth.accessToken,
    error: state.auth.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn: signInRequest,
    getCurrentUser: getCurrentUserRequest,
    cleanError: cleanError,
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PageSignIn);

export {connectedComponent as PageSignIn};
