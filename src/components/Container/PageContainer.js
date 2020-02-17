import React from 'react';
import Container from 'react-bootstrap/Container';


export function PageContainer(props) {
  return <Container className="col-md-9 py-5">{props.children}</Container>;
}
