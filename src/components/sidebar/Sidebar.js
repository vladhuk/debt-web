import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Sidebar.css'

function Sidebar(props) {
    return <Navbar bg='light'
                   className='col-md-2 border-right flex-column sidebar'
    >
        <Nav className='flex-column w-100'>
            {props.children}
        </Nav>
    </Navbar>
}

export default Sidebar;