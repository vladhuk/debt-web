import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React from 'react';

function TitleWithButtons(props) {
  return (
    <Row className="border-bottom pb-2">
      <h1>{props.title}</h1>

      <ButtonToolbar className="ml-auto">
        {props.buttons.map(button => (
          <Button
            key={button.title}
            className="ml-1"
            variant="primary"
            onClick={button.onClick}
          >
            {button.title}
          </Button>
        ))}
        {props.children}
      </ButtonToolbar>
    </Row>
  );
}

export { TitleWithButtons };
