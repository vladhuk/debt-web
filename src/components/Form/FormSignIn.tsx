import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { cleanError, signInRequest } from '../../actions/auth-actions';
import { LoginPayload } from '../../types/request';
import { State } from '../../types/redux';

interface StateProps {
  accessToken: string | null;
  error: Error | null;
}

interface DispatchProps {
  signIn(data: LoginPayload): void;
  cleanError(): void;
}

interface OwnProps {
  className?: string;
  onSuccessSign(accessToken: string): void;
  onError(): void;
  onSubmit(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

function FormSignIn(props: Props): JSX.Element {
  const { accessToken, error, className } = props;

  const [validatedUsername, setValidatedUsername] = useState(true);
  const [validatedPassword, setValidatedPassword] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  const validateFields = (): void => {
    setValidatedUsername(!!username.length);
    setValidatedPassword(!!password.length);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    props.onSubmit();
    validateFields();

    if (form.checkValidity()) {
      props.signIn({ username, password });
    }
  };

  return (
    <Form className={className} noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="username" className="mb-0">
        <Form.Label column>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Username"
          autoFocus
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

const mapStateToProps = (state: State): StateProps => ({
  accessToken: state.auth.accessToken,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      signIn: signInRequest,
      cleanError,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignIn);

export { connectedComponent as FormSignIn };
