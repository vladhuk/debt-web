import Row from 'react-bootstrap/Row';
import React from 'react';

interface Props {
  title: string;
}

export function Title(props: Props): JSX.Element {
  const { title } = props;

  return (
    <Row className="border-bottom pb-2">
      <h1>{title}</h1>
    </Row>
  );
}
