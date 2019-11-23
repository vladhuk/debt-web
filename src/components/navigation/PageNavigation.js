import React from "react";
import {Route, Switch} from "react-router-dom";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import FriendsPage from "../friends-page/FriendsPage";
import DebtsPage from "../debts-page/DebtsPage";


function PageNavigation() {
    return <Switch>
        <Route exact path="/" component={null}/>
        <Route path="/friends" component={FriendsPage}/>
        <Route path="/groups" component={null}/>
        <Route path="/debts" component={DebtsPage}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
    </Switch>
}

export default PageNavigation;