import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PageLogout, PageSignIn, PageSignUp} from '../../Page';

export function PublicNavigationPage() {
  return (
    <Switch>
      <Route exact path="/signin" component={PageSignIn} />
      <Route exact path="/signup" component={PageSignUp} />
      <Route exact path="/logout" component={PageLogout} />
    </Switch>
  );
}
