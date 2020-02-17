import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';
import {cleanError, signInRequest} from '../../actions/auth-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function FormSignIn(props) {
  const [validatedUsername, setValidatedUsername] = useState(true);
  const [validatedPassword, setValidatedPassword] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (props.accessToken) {
      props.onSuccessSign(props.accessToken);
    }
  }, [props.accessToken]);

  useEffect(() => {
    if (props.error) {
      props.onError();
      props.cleanError();
    }
  }, [props.error]);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    props.onSubmit();
    validateFields();

    if (form.checkValidity()) {
      props.signIn({ username, password });
    }
  };

  const validateFields = () => {
    setValidatedUsername(!!username.length);
    setValidatedPassword(!!password.length);
  };

  return (
    <Form className={props.className} noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="username" className="mb-0">
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

      <Button type="submit" variant="success" className="w-100">
        Submit
      </Button>
    </Form>
  );
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn: signInRequest,
      cleanError: cleanError,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignIn);

export { connectedComponent as FormSignIn };
