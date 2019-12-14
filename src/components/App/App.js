import React from 'react';
import Header from "../Header";
import {NavigationPage} from "../Navigation";
import {BrowserRouter} from "react-router-dom";
import Row from "react-bootstrap/Row";

function App() {
    return <BrowserRouter>
        <Header/>
        <Row className='m-0'>
            <NavigationPage/>
        </Row>
    </BrowserRouter>;
}

export default App;
