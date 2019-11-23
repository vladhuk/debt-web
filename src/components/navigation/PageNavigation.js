import React from "react";
import {Route, Switch} from "react-router-dom";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";


function PageNavigation() {
    return <Switch>
        <Route exact path="/" component={null}/>
        <Route exact path="/friends" component={null}/>
        <Route exact path="/groups" component={null}/>
        <Route exact path="/debts" component={null}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
    </Switch>
}

export default PageNavigation;