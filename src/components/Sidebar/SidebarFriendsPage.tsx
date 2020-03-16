import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { Sidebar } from './Sidebar';
import NotificationsCounter from '../NotificationsCounter';
import { State } from '../../types/redux';

interface StateProps {
  friendsNotificationsNumber: number;
}

function SidebarFriendsPage(props: StateProps): JSX.Element {
  const { friendsNotificationsNumber } = props;

  return (
    <Sidebar>
      <LinkContainer to="/friends/all" className="border-bottom">
        <Nav.Link>All</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/friends/requests/sent">
        <Nav.Link>Sent requests</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/friends/requests/received" className="border-bottom">
        <Nav.Link>
          Received requests{' '}
          <NotificationsCounter>
            {friendsNotificationsNumber || 0}
          </NotificationsCounter>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/friends/blacklist">
        <Nav.Link>Blacklist</Nav.Link>
      </LinkContainer>
    </Sidebar>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  friendsNotificationsNumber: state.friendRequests.number,
});

const connectedComponent = connect<StateProps, {}, {}, State>(mapStateToProps)(
  SidebarFriendsPage
);

export { connectedComponent as SidebarFriendsPage };
