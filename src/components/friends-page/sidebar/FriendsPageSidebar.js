import React from "react";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import Sidebar from "../../sidebar/Sidebar";
import NotificationsCounter from "../../notifications-counter/NotificationsCounter";

function FriendsPageSidebar() {
    return <Sidebar>
            <LinkContainer to='/friends/all' className='border-bottom'>
                <Nav.Link>All</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/sent'>
                <Nav.Link>Sent requests</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/received' className='border-bottom'>
                <Nav.Link>
                    Received requests <NotificationsCounter>10</NotificationsCounter>
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/received'>
                <Nav.Link>Blacklist</Nav.Link>
            </LinkContainer>
    </Sidebar>
}

export default FriendsPageSidebar;