import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";


function FriendsSidebarNavigation() {
    return <Switch>
        <Route exact path="/friends/all" component={null}/>
        <Route exact path="/friends/requests/sent" component={null}/>
        <Route exact path="/friends/requests/received" component={null}/>
        <Redirect from='/friends' to='/friends/all'/>
    </Switch>
}

export default FriendsSidebarNavigation;