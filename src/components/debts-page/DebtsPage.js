import React from "react";
import {BrowserRouter} from "react-router-dom";
import DebtsPageSidebar from "./sidebar/DebtsPageSidebar";


function DebtsPage() {
    return <BrowserRouter>
        <DebtsPageSidebar/>
    </BrowserRouter>
}

export default DebtsPage;