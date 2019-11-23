import React from 'react';
import Header from "../header/Header";
import PageNavigation from "../navigation/PageNavigation";
import {BrowserRouter} from "react-router-dom";

function App() {
    return <BrowserRouter>
        <Header/>
        <PageNavigation/>
    </BrowserRouter>;
}

export default App;
