// @flow

import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import * as React from 'react';

type Props = {|
  title: string,
  buttonTitle: string,
  onButtonClick: SyntheticEvent<HTMLButtonElement>,
  children: React.Node,
|};

export function TitleWithButton(props: Props) {
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
