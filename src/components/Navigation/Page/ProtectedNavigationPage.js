import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PageDebts, PageFriends, PageGroups} from '../../Page';
import {connect} from 'react-redux';

function ProtectedNavigationPage(props) {
  const isAuthenticated = !!props.currentUser;

  return (
    isAuthenticated && (
      <Switch>
        <Route path="/friends" component={PageFriends} />
        <Route path="/groups" component={PageGroups} />
        <Route path="/debts" component={PageDebts} />
      </Switch>
    )
  );
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
});

const connectedComponent = connect(
  mapStateToProps,
  null
)(ProtectedNavigationPage);

export { connectedComponent as ProtectedNavigationPage };
