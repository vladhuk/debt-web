import React, {useEffect} from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {LinkContainer} from "react-router-bootstrap";
import NotificationsCounter from "../NotificationsCounter";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getCurrentUserRequest} from "../../actions/users-actions";

function Header(props) {
    useEffect(() => {
        props.getCurrentUser();
    }, []);

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
            {
                props.currentUser.name
                    ? <>
                        <Navbar.Text disabled>Signed in as: {props.currentUser.name}</Navbar.Text>
                        <LinkContainer to='/logout'>
                            <Nav.Item className='ml-3'>
                                <Button variant="dark">Logout</Button>
                            </Nav.Item>
                        </LinkContainer>
                    </>
                    : <>
                        <LinkContainer to='/signin'>
                            <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/signup'>
                            <Nav.Item className='ml-2'>
                                <Button variant="light">Sign Up</Button>
                            </Nav.Item>
                        </LinkContainer>
                    </>
            }
        </Nav>
    </Navbar>
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCurrentUser: getCurrentUserRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
