import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
  children: JSX.ElementChildrenAttribute;
}

export function PageContainer(props: Props): JSX.Element {
  const { children } = props;

  return <Container className="col-md-9 py-5">{children}</Container>;
}
