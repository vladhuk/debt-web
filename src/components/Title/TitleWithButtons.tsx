import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React, { SyntheticEvent } from 'react';

interface ButtonProps {
  title: string;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

interface Props {
  title: string;
  buttons: ButtonProps[];
  children: JSX.ElementChildrenAttribute;
}

export function TitleWithButtons(props: Props): JSX.Element {
  const { title, buttons, children } = props;

  return (
    <Row className="border-bottom pb-2">
      <h1>{title}</h1>

      <ButtonToolbar className="ml-auto">
        {buttons.map(button => (
          <Button
            key={button.title}
            className="ml-1"
            variant="primary"
            onClick={button.onClick}
          >
            {button.title}
          </Button>
        ))}
        {children}
      </ButtonToolbar>
    </Row>
  );
}
