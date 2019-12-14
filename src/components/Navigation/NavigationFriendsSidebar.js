import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {TabAllFriends} from "../Page/PageFriends/Tab";


function NavigationFriendsSidebar() {
    return <Switch>
        <Route exact path="/friends/all" component={TabAllFriends}/>
        <Route exact path="/friends/requests/sent" component={null}/>
        <Route exact path="/friends/requests/received" component={null}/>
        <Route exact path="/friends/blacklist" component={null}/>
        <Redirect from='/friends' to='/friends/all'/>
    </Switch>
}

export { NavigationFriendsSidebar };