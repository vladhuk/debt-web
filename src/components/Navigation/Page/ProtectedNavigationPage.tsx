import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageDebts, PageFriends, PageGroups } from '../../Page';
import { User } from '../../../types/model';
import { State } from '../../../types/redux';

interface StateProps {
  currentUser?: User | null;
}

function ProtectedNavigationPage(props: StateProps): JSX.Element | null {
  const { currentUser } = props;

  if (!currentUser) {
    return null;
  }

  return (
    <Switch>
      <Route path="/friends" component={PageFriends} />
      <Route path="/groups" component={PageGroups} />
      <Route path="/debts" component={PageDebts} />
    </Switch>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  currentUser: state.users.currentUser,
});

const connectedComponent = connect(
  mapStateToProps,
  null
)(ProtectedNavigationPage);

export { connectedComponent as ProtectedNavigationPage };
