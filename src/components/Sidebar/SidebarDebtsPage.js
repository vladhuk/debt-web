import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
import {Sidebar} from './Sidebar';
import NotificationsCounter from '../NotificationsCounter';
import {connect} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';

function SidebarDebtsPage(props) {
  return (
    <Sidebar>
      <LinkContainer to="/debts/all" className="border-bottom">
        <Nav.Link>All</Nav.Link>
      </LinkContainer>
      <Navbar.Text className="p-2">
        <strong>Debt requests</strong>
      </Navbar.Text>
      <LinkContainer to="/debts/requests/sent">
        <Nav.Link>Sent requests</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/debts/requests/received" className="border-bottom">
        <Nav.Link>
          Received requests{' '}
          <NotificationsCounter>
            {props.debtRequestsNotificationsNumber}
          </NotificationsCounter>
        </Nav.Link>
      </LinkContainer>
      <Navbar.Text className="p-2">
        <strong>Repayment requests</strong>
      </Navbar.Text>
      <LinkContainer to="/repayments/requests/sent">
        <Nav.Link>Sent requests</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/repayments/requests/received">
        <Nav.Link>
          Received requests{' '}
          <NotificationsCounter>
            {props.repaymentRequestsNotificationNumber}
          </NotificationsCounter>
        </Nav.Link>
      </LinkContainer>
    </Sidebar>
  );
}

const mapStateToProps = state => ({
  debtRequestsNotificationsNumber: state.debtRequests.number,
  repaymentRequestsNotificationNumber: state.repaymentRequests.number,
});

const connectedComponent = connect(mapStateToProps, null)(SidebarDebtsPage);

export { connectedComponent as SidebarDebtsPage };
