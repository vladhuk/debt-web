import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Sidebar.css';

interface Props {
  children: React.ReactNode;
}

export function Sidebar(props: Props): JSX.Element {
  const { children } = props;

  return (
    <Navbar bg="light" className="col-md-2 border-right flex-column sidebar">
      <Nav className="flex-column w-100">{children}</Nav>
    </Navbar>
  );
}
