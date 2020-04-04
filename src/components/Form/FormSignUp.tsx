import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { cleanError, signUpRequest } from '../../actions/auth-actions';
import { SignUpPayload } from '../../types/request';
import { State } from '../../types/redux';

interface StateProps {
  accessToken: string | null;
  error: Error | null;
}

interface DispatchProps {
  signUp(data: SignUpPayload): void;
  cleanError(): void;
}

interface OwnProps {
  className?: string;
  onSuccessSign(accessToken: string): void;
  onError(): void;
  onSubmit(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

function FormSignUp(props: Props): JSX.Element {
  const { accessToken, error, className } = props;

  const [validatedForm, setValidatedForm] = useState(false);
  const [validatedName, setValidatedName] = useState(true);
  const [validatedUsername, setValidatedUsername] = useState(true);
  const [validatedPassword, setValidatedPassword] = useState(true);
  const [validatedConfirmPassword, setValidatedConfirmPassword] = useState(
    true
  );
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (accessToken) {
      props.onSuccessSign(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (error) {
      props.onError();
      props.cleanError();
    }
  }, [error]);

  useEffect(() => {
    if (validatedForm && validatedConfirmPassword) {
      props.signUp({ name, username, password: confirmPassword });
    }
    setValidatedForm(false);
  }, [validatedForm, validatedConfirmPassword]);

  const validateFields = (): void => {
    setValidatedName(!!name.length);
    setValidatedUsername(!!username.length);
    setValidatedPassword(!!password.length);

    if (password.length) {
      setValidatedConfirmPassword(password === confirmPassword);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    props.onSubmit();
    validateFields();

    setValidatedForm(form.checkValidity());
  };

  return (
    <Form className={className} noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="name" className="mb-0">
        <Form.Label column>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          required
          autoFocus
          isInvalid={!validatedName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setName(event.target.value);
            setValidatedName(true);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="username" className="mb-0">
        <Form.Label column>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Username"
          required
          isInvalid={!validatedUsername}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setUsername(event.target.value);
            setValidatedUsername(true);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="border rounded bg-light p-2 mt-3">
        <Form.Group controlId="password">
          <Form.Label column>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            isInvalid={!validatedPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
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
            name="confirm-password"
            placeholder="Confirm password"
            required
            isInvalid={!validatedConfirmPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              setConfirmPassword(event.target.value);
              setValidatedConfirmPassword(true);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Passwords do not match
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Group>

      <Button type="submit" variant="success" className="w-100">
        Submit
      </Button>
    </Form>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  accessToken: state.auth.accessToken,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      signUp: signUpRequest,
      cleanError,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignUp);

export { connectedComponent as FormSignUp };
