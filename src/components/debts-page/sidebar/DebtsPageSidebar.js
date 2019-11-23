import React from "react";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import Sidebar from "../../sidebar/Sidebar";

function DebtsPageSidebar() {
    return <Sidebar>
        <LinkContainer to='/debts/all' className='border-bottom'>
            <Nav.Link>All</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/debts/requests/sent'>
            <Nav.Link>Sent requests</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/debts/requests/received' className='border-bottom'>
            <Nav.Link>Received requests</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/repayments/requests/sent'>
            <Nav.Link>Sent requests</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/repayments/requests/received'>
            <Nav.Link>Received requests</Nav.Link>
        </LinkContainer>
    </Sidebar>
}

export default DebtsPageSidebar;