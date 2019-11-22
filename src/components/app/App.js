import React from 'react';
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import {BrowserRouter} from "react-router-dom";

function App() {
    return <BrowserRouter>
        <Header/>
        <Navigation/>
    </BrowserRouter>;
}

export default App;
