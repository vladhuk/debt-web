import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {TabAllDebts, TabSentRepaymentRequests} from "../Page/PageDebts/Tab";


function NavigationDebtsSidebar() {
    return <Switch>
        <Route exact path="/debts/all" component={TabAllDebts}/>
        <Route exact path="/debts/requests/sent" component={null}/>
        <Route exact path="/debts/requests/received" component={null}/>
        <Route exact path="/repayments/requests/sent" component={TabSentRepaymentRequests}/>
        <Route exact path="/repayments/requests/received" component={null}/>
        <Redirect from='/debts' to='/debts/all'/>
    </Switch>
}

export { NavigationDebtsSidebar };