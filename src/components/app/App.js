import React from 'react';
import Header from "../header/Header";
import PageNavigation from "../navigation/PageNavigation";
import {BrowserRouter} from "react-router-dom";
import Row from "react-bootstrap/Row";

function App() {
    return <BrowserRouter>
        <Header/>
        <Row className='m-0'>
            <PageNavigation/>
        </Row>
    </BrowserRouter>;
}

export default App;
