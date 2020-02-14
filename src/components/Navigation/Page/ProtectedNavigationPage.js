import React from "react";
import {Route, Switch} from "react-router-dom";
import {DebtsPage, FriendsPage, PageGroups} from "../../Page";
import {connect} from "react-redux";


function ProtectedNavigationPage(props) {
    const isAuthenticated = !!Object.entries(props.currentUser).length;

    return isAuthenticated && <Switch>
        <Route path="/friends" component={FriendsPage}/>
        <Route path="/groups" component={PageGroups}/>
        <Route path="/debts" component={DebtsPage}/>
    </Switch>;
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
});

const connectedComponent = connect(mapStateToProps, null)(ProtectedNavigationPage);

export {connectedComponent as ProtectedNavigationPage};