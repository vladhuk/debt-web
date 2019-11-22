import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import {LinkContainer} from "react-router-bootstrap";

function Header() {
    return <Navbar
        bg="dark"
        variant="dark"
    >
        <LinkContainer to='/'>
            <Navbar.Brand>Debt</Navbar.Brand>
        </LinkContainer>
        <Nav>
            <LinkContainer to='/friends'>
                <Nav.Link>
                    Friends
                    <sup><Badge pill variant='success'>10</Badge></sup>
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/groups'>
                <Nav.Link>Groups</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/debts'>
                <Nav.Link>
                    Debts
                    <sup><Badge pill variant='success'>10</Badge></sup>
                </Nav.Link>
            </LinkContainer>
        </Nav>
        <Nav className='ml-auto'>
            <LinkContainer to='/signup'>
                <Nav.Item>
                    <Button variant="light">Sign Up</Button>
                </Nav.Item>
            </LinkContainer>
            <LinkContainer to='/signin'>
                <Nav.Item>
                    <Button variant="outline-light" className='ml-2'>Sign In</Button>
                </Nav.Item>
            </LinkContainer>
        </Nav>
    </Navbar>
}

export default Header;