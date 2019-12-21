import React from "react";
import {BrowserRouter} from "react-router-dom";
import DebtsPageSidebar from "./DebtsPageSidebar";
import {NavigationDebtsSidebar} from "../../Navigation";


function DebtsPage() {
    return <BrowserRouter>
        <DebtsPageSidebar/>
        <NavigationDebtsSidebar/>
    </BrowserRouter>
}

export {DebtsPage};