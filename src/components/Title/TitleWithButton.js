import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React from 'react';

function TitleWithButton(props) {
  return (
    <Row className="border-bottom pb-2">
      <h1>{props.title}</h1>

      <ButtonToolbar className="ml-auto">
        <Button variant="primary" onClick={props.onButtonClick}>
          {props.buttonTitle}
        </Button>

        {props.children}
      </ButtonToolbar>
    </Row>
  );
}

export { TitleWithButton };
