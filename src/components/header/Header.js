import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {LinkContainer} from "react-router-bootstrap";
import NotificationsCounter from "../notifications-counter/NotificationsCounter";

function Header() {
    return <Navbar
        bg="dark"
        variant="dark"
    >
        <LinkContainer to='/'>
            <Navbar.Brand>Debt</Navbar.Brand>
        </LinkContainer>
        <Nav>
            <LinkContainer to='/friends/all'>
                <Nav.Link>
                    Friends <NotificationsCounter>10</NotificationsCounter>
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/groups/all'>
                <Nav.Link>Groups</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/debts/all'>
                <Nav.Link>
                    Debts <NotificationsCounter>10</NotificationsCounter>
                </Nav.Link>
            </LinkContainer>
        </Nav>
        <Nav className='ml-auto'>
            <LinkContainer to='/signin'>
                <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signup'>
                <Nav.Item className='ml-2'>
                    <Button variant="light">Sign Up</Button>
                </Nav.Item>
            </LinkContainer>
        </Nav>
    </Navbar>
}

export default Header;