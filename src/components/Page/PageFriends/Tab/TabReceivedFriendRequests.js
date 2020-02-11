import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    acceptFriendRequestRequest,
    countNewReceivedFriendRequestsRequest,
    getReceivedFriendRequestsRequest,
    rejectFriendRequestRequest
} from "../../../../actions/friend-requests-actions";
import {Title} from "../../../Title";
import {CardReceivedFriendRequest} from "../../../Card";
import {PageContainer} from "../../../Container";


function TabReceivedFriendRequests(props) {

    useEffect(() => {
        props.getReceivedFriendRequests();
    }, []);

    useEffect(() => {
        if (props.isNeededToUpdateList) {
            props.getReceivedFriendRequests();
        }
    }, [props.isNeededToUpdateList]);

    useEffect(() => {
        if (props.receivedFriendRequests.length) {
            props.countFriendRequestsNotifications();
        }
    }, [props.receivedFriendRequests]);

    return (<PageContainer>
        <Title title='Received requests' />

        {
            props.receivedFriendRequests.map(request =>
                <CardReceivedFriendRequest
                    key={request.id}
                    user={request.sender}
                    comment={request.comment}
                    status={request.status.name}
                    date={request.createdAt}
                    onAccept={() => props.acceptFriendRequest(request.id)}
                    onReject={() => props.rejectFriendRequest(request.id)}
                />
            )
        }
    </PageContainer>);
}

const mapStateToProps = state => ({
    receivedFriendRequests: state.friendRequests.received,
    isNeededToUpdateList: state.friendRequests.isNeededToUpdateList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    countFriendRequestsNotifications: countNewReceivedFriendRequestsRequest,
    getReceivedFriendRequests: getReceivedFriendRequestsRequest,
    acceptFriendRequest: acceptFriendRequestRequest,
    rejectFriendRequest: rejectFriendRequestRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabReceivedFriendRequests);

export {connectedComponent as TabReceivedFriendRequests};