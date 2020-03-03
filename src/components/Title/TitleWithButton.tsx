import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React, { SyntheticEvent } from 'react';

interface Props {
  title: string;
  buttonTitle: string;
  onButtonClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  children: JSX.ElementChildrenAttribute;
}

export function TitleWithButton(props: Props): JSX.Element {
  const { title, buttonTitle, onButtonClick, children } = props;

  return (
    <Row className="border-bottom pb-2">
      <h1>{title}</h1>

      <ButtonToolbar className="ml-auto">
        <Button variant="primary" onClick={onButtonClick}>
          {buttonTitle}
        </Button>

        {children}
      </ButtonToolbar>
    </Row>
  );
}
