import React, {useEffect} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import NotificationsCounter from '../NotificationsCounter';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentUserRequest} from '../../actions/users-actions';
import {countNewReceivedFriendRequestsRequest} from '../../actions/friend-requests-actions';
import {countNewReceivedDebtRequestsRequest} from '../../actions/debt-requests-actions';
import {countNewReceivedRepaymentRequestsRequest} from '../../actions/repayment-requests-actions';

function Header(props) {
  const isAuthenticated = !!props.currentUser;

  useEffect(() => {
    props.getCurrentUser();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      props.countFriendRequestsNotifications();
      props.countDebtRequestsNotifications();
      props.countRepaymentRequestsNotifications();
    }
  }, [props.currentUser]);

  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Debt</Navbar.Brand>
      </LinkContainer>
      {isAuthenticated && (
        <Nav>
          <LinkContainer to="/friends/all">
            <Nav.Link>
              Friends{' '}
              <NotificationsCounter>
                {props.friendsNotificationsNumber}
              </NotificationsCounter>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/groups/all">
            <Nav.Link>Groups</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/debts/all">
            <Nav.Link>
              Debts{' '}
              <NotificationsCounter>
                {props.debtsNotificationsNumber}
              </NotificationsCounter>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      )}
      <Nav className="ml-auto">
        {isAuthenticated ? (
          <>
            <Navbar.Text disabled>
              Signed in as: {props.currentUser.name}
            </Navbar.Text>
            <LinkContainer to="/logout">
              <Nav.Item className="ml-3">
                <Button variant="dark">Logout</Button>
              </Nav.Item>
            </LinkContainer>
          </>
        ) : (
          <>
            <LinkContainer to="/signin">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Item className="ml-2">
                <Button variant="light">Sign Up</Button>
              </Nav.Item>
            </LinkContainer>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  friendsNotificationsNumber: state.friendRequests.number,
  debtsNotificationsNumber:
    state.debtRequests.number + state.repaymentRequests.number,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCurrentUser: getCurrentUserRequest,
      countFriendRequestsNotifications: countNewReceivedFriendRequestsRequest,
      countDebtRequestsNotifications: countNewReceivedDebtRequestsRequest,
      countRepaymentRequestsNotifications: countNewReceivedRepaymentRequestsRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);
