import React, {useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import Sidebar from "../../Sidebar";
import NotificationsCounter from "../../NotificationsCounter";
import {countNewReceivedFriendRequestsRequest} from "../../../actions/friend-requests-actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


function FriendsPageSidebar(props) {
    useEffect(() => {
        props.countFriendRequestsNotifications();
    }, []);

    return <Sidebar>
            <LinkContainer to='/friends/all' className='border-bottom'>
                <Nav.Link>All</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/sent'>
                <Nav.Link>Sent requests</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/requests/received' className='border-bottom'>
                <Nav.Link>
                    Received requests <NotificationsCounter>{props.friendsNotificationsNumber}</NotificationsCounter>
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/friends/blacklist'>
                <Nav.Link>Blacklist</Nav.Link>
            </LinkContainer>
    </Sidebar>
}

const mapStateToProps = state => ({
    friendsNotificationsNumber: state.friendRequests.number,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    countFriendRequestsNotifications: countNewReceivedFriendRequestsRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPageSidebar)
