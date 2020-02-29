import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {addToBlacklistRequest} from '../../actions/blacklist-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function FormAddToBlacklist(props) {
  const [validatedUsername, setValidatedUsername] = useState(true);
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    if (form.checkValidity()) {
      props.addToBlacklist({ username });
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
            autofocus
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

      <Row className="justify-content-center">
        <Button type="submit" variant="success">
          Add
        </Button>
      </Row>
    </Form>
  );
}

const mapDispatchToProps = dispatch =>
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
