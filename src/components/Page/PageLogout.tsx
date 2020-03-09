import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteToken } from '../../util';
import { logout } from '../../actions/auth-actions';

interface DispatchProps {
  dispatchLogout(): void;
}

function PageLogout(props: DispatchProps): JSX.Element {
  const { dispatchLogout } = props;

  deleteToken();
  dispatchLogout();

  return <Redirect to="/signin" />;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      dispatchLogout: logout,
    },
    dispatch
  );

const connectedComponent = connect(null, mapDispatchToProps)(PageLogout);

export { connectedComponent as PageLogout };
