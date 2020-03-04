import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Header from '../Header';
import { NavigationPage } from '../Navigation';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Row className="m-0">
        <NavigationPage />
      </Row>
    </BrowserRouter>
  );
}
