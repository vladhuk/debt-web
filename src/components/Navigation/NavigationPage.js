import React from "react";
import {Route, Switch} from "react-router-dom";
import {DebtsPage, FriendsPage, PageGroups, PageSignIn, PageSignUp} from "../Page";


function NavigationPage() {
    return <Switch>
        <Route exact path="/" component={null}/>
        <Route path="/friends" component={FriendsPage}/>
        <Route path="/groups" component={PageGroups}/>
        <Route path="/debts" component={DebtsPage}/>
        <Route exact path="/signin" component={PageSignIn}/>
        <Route exact path="/signup" component={PageSignUp}/>
    </Switch>
}

export {NavigationPage};