import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import AllFriendsTab from "../friends-page/tab-all-friends/AllFriendsTab";


function FriendsSidebarNavigation() {
    return <Switch>
        <Route exact path="/friends/all" component={AllFriendsTab}/>
        <Route exact path="/friends/requests/sent" component={null}/>
        <Route exact path="/friends/requests/received" component={null}/>
        <Route exact path="/friends/blacklist" component={null}/>
        <Redirect from='/friends' to='/friends/all'/>
    </Switch>
}

export default FriendsSidebarNavigation;