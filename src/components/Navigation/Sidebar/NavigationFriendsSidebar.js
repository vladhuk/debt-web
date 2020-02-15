import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {TabAllFriends, TabBlacklist, TabReceivedFriendRequests, TabSentFriendRequests} from "../../Tab";


function NavigationFriendsSidebar() {
    return <Switch>
        <Route exact path="/friends/all" component={TabAllFriends}/>
        <Route exact path="/friends/requests/sent" component={TabSentFriendRequests}/>
        <Route exact path="/friends/requests/received" component={TabReceivedFriendRequests}/>
        <Route exact path="/friends/blacklist" component={TabBlacklist}/>
        <Redirect from='/friends' to='/friends/all'/>
    </Switch>
}

export { NavigationFriendsSidebar };