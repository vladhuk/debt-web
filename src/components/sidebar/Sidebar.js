import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Sidebar(props) {
    return <Navbar className='col-md-2 border bg-light'>
        <Nav className='min-vh-100 flex-column w-100'>
            {props.children}
        </Nav>
    </Navbar>
}

export default Sidebar;