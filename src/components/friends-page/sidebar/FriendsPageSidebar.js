import React from "react";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import Sidebar from "../../sidebar/Sidebar";

function FriendsPageSidebar() {
    return <Sidebar>
            <LinkContainer to='/friends/all' className='border-bottom'>
                <Nav.Link>All</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/sent'>
                <Nav.Link>Sent requests</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/received'>
                <Nav.Link>Received requests</Nav.Link>
            </LinkContainer>
    </Sidebar>
}

export default FriendsPageSidebar;