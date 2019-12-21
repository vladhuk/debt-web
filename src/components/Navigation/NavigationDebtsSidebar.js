import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {
    TabAllDebts,
    TabReceivedDebtRequests,
    TabReceivedRepaymentRequests,
    TabSentDebtRequests,
    TabSentRepaymentRequests
} from "../Page/PageDebts/Tab";


function NavigationDebtsSidebar() {
    return <Switch>
        <Route exact path="/debts/all" component={TabAllDebts}/>
        <Route exact path="/debts/requests/sent" component={TabSentDebtRequests}/>
        <Route exact path="/debts/requests/received" component={TabReceivedDebtRequests}/>
        <Route exact path="/repayments/requests/sent" component={TabSentRepaymentRequests}/>
        <Route exact path="/repayments/requests/received" component={TabReceivedRepaymentRequests}/>
        <Redirect from='/debts' to='/debts/all'/>
    </Switch>
}

export { NavigationDebtsSidebar };