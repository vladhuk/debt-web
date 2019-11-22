import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

function Header() {
    return <Navbar
        activeKey="/"
        bg="dark"
        variant="dark"
    >
        <Navbar.Brand href='/'>Debt</Navbar.Brand>
        <Nav>
            <Nav.Item>
                <Nav.Link href='/friends'>
                    Friends
                    <sup><Badge pill variant='success'>10</Badge></sup>
                </Nav.Link>
            </Nav.Item><Nav.Item>
                <Nav.Link href='/groups'>Groups</Nav.Link>
            </Nav.Item><Nav.Item>
                <Nav.Link href='/debt'>
                    Debts
                    <sup><Badge pill variant='success'>10</Badge></sup>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <Nav className='ml-auto'>
            <Nav.Link href='/login'>Login</Nav.Link>
        </Nav>
    </Navbar>
}

export default Header;