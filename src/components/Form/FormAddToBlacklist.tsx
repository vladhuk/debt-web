import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addToBlacklistRequest } from '../../actions/blacklist-actions';
import { UserPayload } from '../../types/request';

interface DispatchProps {
  addToBlacklist(user: UserPayload): void;
}

interface OwnProps {
  onSubmit(): void;
}

type Props = DispatchProps & OwnProps;

function FormAddToBlacklist(props: Props): JSX.Element {
  const [validatedUsername, setValidatedUsername] = useState(true);
  const [username, setUsername] = useState('');

  const validateFields = (): void => {
    setValidatedUsername(!!username.length);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    if (form.checkValidity()) {
      props.addToBlacklist({ username });
      props.onSubmit();
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Username"
            autoComplete="off"
            autoFocus
            required
            isInvalid={!validatedUsername}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              setUsername(event.target.value);
              setValidatedUsername(true);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a username
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Row className="justify-content-center">
        <Button type="submit" variant="success">
          Add
        </Button>
      </Row>
    </Form>
  );
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      addToBlacklist: addToBlacklistRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  null,
  mapDispatchToProps
)(FormAddToBlacklist);

export { connectedComponent as FormAddToBlacklist };
