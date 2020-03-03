import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Header from '../Header';
import { NavigationPage } from '../Navigation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Row className="m-0">
        <NavigationPage />
      </Row>
    </BrowserRouter>
  );
}

export default App;
