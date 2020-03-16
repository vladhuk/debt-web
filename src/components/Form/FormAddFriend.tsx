import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sendFriendRequestRequest } from '../../actions/friend-requests-actions';
import { FriendRequestPayload } from '../../types/request';

interface DispatchProps {
  sendFriendRequest(request: FriendRequestPayload): void;
}

interface OwnProps {
  onSubmit(): void;
}

type Props = DispatchProps & OwnProps;

function FormAddFriend(props: Props): JSX.Element {
  const [validatedUsername, setValidatedUsername] = useState(true);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const validateFields = (): void => {
    setValidatedUsername(!!username.length);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    if (form.checkValidity()) {
      props.sendFriendRequest({
        receiver: { username },
        comment,
      });
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

      <Form.Group controlId="comment">
        <Form.Control
          type="text"
          placeholder="Enter comment (optional)"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setComment(event.target.value)
          }
          autoComplete="off"
        />
      </Form.Group>

      <Row className="justify-content-center">
        <Button type="submit" variant="success">
          Send request
        </Button>
      </Row>
    </Form>
  );
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      sendFriendRequest: sendFriendRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(null, mapDispatchToProps)(FormAddFriend);

export { connectedComponent as FormAddFriend };
