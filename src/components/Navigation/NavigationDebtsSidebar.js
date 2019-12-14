import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";


function NavigationDebtsSidebar() {
    return <Switch>
        <Route exact path="/debts/all" component={null}/>
        <Route exact path="/debts/requests/sent" component={null}/>
        <Route exact path="/debts/requests/received" component={null}/>
        <Route exact path="/repayments/requests/sent" component={null}/>
        <Route exact path="/repayments/requests/received" component={null}/>
        <Redirect from='/debts' to='/debts/all'/>
    </Switch>
}

export { NavigationDebtsSidebar };