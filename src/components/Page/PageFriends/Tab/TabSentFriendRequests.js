import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    deleteSentFriendRequestRequest,
    getSentFriendRequestsRequest
} from "../../../../actions/friend-requests-actions";
import {Title} from "../../../Title";
import {CardSentFriendRequest} from "../../../Card";
import {PageContainer} from "../../../Container";
import {ModalConfirmDelete} from "../../../Modal";


function TabSentFriendRequests(props) {
    const [deleteRequestModalShow, setDeleteRequestModalShow] = React.useState(false);
    const [requestIdForDelete, setRequestIdForDelete] = React.useState();

    const deleteRequest = id => {
        props.deleteSentRequest(id);
        setDeleteRequestModalShow(false);
    };

    useEffect(() => {
        props.getSentFriendRequests();
    }, []);

    return (<PageContainer>
        <Title title='Sent requests' />


        {
            props.sentFriendRequests.map(request =>
                <CardSentFriendRequest
                    key={request.id}
                    user={request.receiver}
                    comment={request.comment}
                    status={request.status.name}
                    onDelete={() => {
                        setDeleteRequestModalShow(true);
                        setRequestIdForDelete(request.id);
                    }}
                />
            )
        }

        <ModalConfirmDelete
            show={deleteRequestModalShow}
            onHide={() => setDeleteRequestModalShow(false)}
            onDelete={() => deleteRequest(requestIdForDelete)}
        >
            Do you want to delete friend request?
        </ModalConfirmDelete>
    </PageContainer>);
}

const mapStateToProps = state => ({
    sentFriendRequests: state.friendRequests.sent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getSentFriendRequests: getSentFriendRequestsRequest,
    deleteSentRequest: deleteSentFriendRequestRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabSentFriendRequests);

export {connectedComponent as TabSentFriendRequests};