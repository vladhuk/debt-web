import React from "react";
import {Route, Switch} from "react-router-dom";


function Navigation() {
    return <Switch>
        <Route exact path="/" component={null}/>
        <Route exact path="/friends" component={null}/>
        <Route exact path="/friends/requests/sent" component={null}/>
        <Route exact path="/friends/requests/received" component={null}/>
        <Route exact path="/debts/requests/sent" component={null}/>
        <Route exact path="/debts/requests/received" component={null}/>
        <Route exact path="/debts/requests/sent" component={null}/>
        <Route exact path="/debts/requests/received" component={null}/>
        <Route exact path="/groups" component={null}/>
        <Route exact path="/login" component={null}/>
    </Switch>
}

export default Navigation;