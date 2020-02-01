import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {cleanError, signUpRequest} from "../../../actions/auth-actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setToken} from "../../../util";
import {getCurrentUserRequest} from "../../../actions/users-actions";


function PageSignUp(props) {
    const [validatedForm, setValidatedForm] = useState(false);
    const [validatedName, setValidatedName] = useState(true);
    const [validatedUsername, setValidatedUsername] = useState(true);
    const [validatedPassword, setValidatedPassword] = useState(true);
    const [validatedConfirmPassword, setValidatedConfirmPassword] = useState(true);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (props.accessToken) {
            setToken(props.accessToken);
            props.getCurrentUser();
            props.history.push('/friends/all');
        }
    }, [props.accessToken]);

    useEffect(() => {
        if (props.error) {
            alert('Username already exist');
            props.cleanError();
        }
    }, [props.error]);

    useEffect(() => {
        if (validatedForm && validatedConfirmPassword) {
            props.signUp({name, username, password: confirmPassword});
        }
        setValidatedForm(false);
    }, [validatedForm, validatedConfirmPassword]);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        checkFields();

        setValidatedForm(form.checkValidity());
    };

    const checkFields = () => {
        setValidatedName(name.length);
        setValidatedUsername(username.length);
        setValidatedPassword(password.length);

        if (password.length) {
            setValidatedConfirmPassword(password === confirmPassword);
        }
    };

    return <Container>
        <h1 className='text-center p-2'>Sign Up</h1>
        <Form className='mx-auto col-md-4' noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="name" className='mb-0'>
                <Form.Label column={true}>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    autoFocus
                    isInvalid={!validatedName}
                    onChange={event => {
                        setName(event.target.value);
                        setValidatedName(true);
                    }}
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

            <Form.Group className='border rounded bg-light p-2 mt-3'>
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
                            setValidatedConfirmPassword(true);
                        }}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="confirm-password">
                    <Form.Control
                        type="password"
                        name='confirm-password'
                        placeholder="Confirm password"
                        required
                        isInvalid={!validatedConfirmPassword}
                        onChange={event => {
                            setConfirmPassword(event.target.value);
                            setValidatedConfirmPassword(true);
                        }}
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

const mapStateToProps = state => ({
    accessToken: state.auth.accessToken,
    error: state.auth.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signUp: signUpRequest,
    getCurrentUser: getCurrentUserRequest,
    cleanError: cleanError,
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PageSignUp);

export {connectedComponent as PageSignUp};

