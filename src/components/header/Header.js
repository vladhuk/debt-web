import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Header() {
    return <Navbar
        activeKey="/"
        bg="dark"
        variant="dark"
    >
        <Navbar.Brand href='/'>Debt</Navbar.Brand>
        <Nav>
            <Nav.Link href='/friends'>
                Friends
                <sup><Badge pill variant='success'>10</Badge></sup>
            </Nav.Link>
            <Nav.Link href='/groups'>Groups</Nav.Link>
            <Nav.Link href='/debt'>
                Debts
                <sup><Badge pill variant='success'>10</Badge></sup>
            </Nav.Link>
        </Nav>
        <Nav className='ml-auto'>
            <Nav.Link href='/signup'>
                <Button variant="outline-light">Sign Up</Button>
            </Nav.Link>
            <Nav.Link href='/signin'>
                <Button variant="outline-light">Sign In</Button>
            </Nav.Link>
        </Nav>
    </Navbar>
}

export default Header;