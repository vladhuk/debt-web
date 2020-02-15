import React from "react";
import {BrowserRouter} from "react-router-dom";
import {SidebarDebtsPage} from "../../Sidebar";
import {NavigationDebtsSidebar} from "../../Navigation";


function DebtsPage() {
    return <BrowserRouter>
        <SidebarDebtsPage/>
        <NavigationDebtsSidebar/>
    </BrowserRouter>
}

export {DebtsPage};