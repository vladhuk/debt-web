import React from 'react';
import {Redirect} from 'react-router';
import {deleteToken} from '../../util';
import {logout} from '../../actions/auth-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function PageLogout(props) {
  deleteToken();
  props.logout();

  return <Redirect to="/signin" />;
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: logout,
    },
    dispatch
  );

const connectedComponent = connect(null, mapDispatchToProps)(PageLogout);

export { connectedComponent as PageLogout };
