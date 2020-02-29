import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {bindActionCreators} from 'redux';
import {sendFriendRequestRequest} from '../../actions/friend-requests-actions';
import {connect} from 'react-redux';

function FormAddFriend(props) {
  const [validatedUsername, setValidatedUsername] = useState(true);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    if (form.checkValidity()) {
      props.sendFriendRequest({
        receiver: { username },
        comment: comment,
      });
      props.onSubmit();
    }
  };

  const validateFields = () => {
    setValidatedUsername(!!username.length);
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
            onChange={event => {
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
          onChange={event => setComment(event.target.value)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendFriendRequest: sendFriendRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(null, mapDispatchToProps)(FormAddFriend);

export { connectedComponent as FormAddFriend };
