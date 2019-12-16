import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getSentFriendRequestsRequest} from "../../../../actions/friend-requests-actions";
import {Title} from "../../../Title";
import {RequestCard} from "../../../Card";
import {PageContainer} from "../../../Container";

function TabSentFriendRequests(props) {


    useEffect(() => {
        props.getSentFriendRequests();
    }, []);

    return (<PageContainer>
        <Title title='Sent requests' />


        {
            props.sentFriendRequests.map(request =>
                <RequestCard
                    key={request.id}
                    user={request.receiver}
                    onClose={() => {
                        // setDeleteFromBlacklistModalShow(true);
                        // setUserIdForDelete(user.id);
                    }}
                />
            )
        }

        {/*<ModalConfirmDelete*/}
        {/*    show={deleteFromBlacklistModalShow}*/}
        {/*    onHide={() => setDeleteFromBlacklistModalShow(false)}*/}
        {/*    onDelete={() => deleteUser(userIdForDelete)}*/}
        {/*>*/}
        {/*    Do you want to delete user from blacklist?*/}
        {/*</ModalConfirmDelete>*/}
    </PageContainer>);
}

const mapStateToProps = state => ({
    sentFriendRequests: state.friendRequests.sent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getSentFriendRequests: getSentFriendRequestsRequest,
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabSentFriendRequests);

export {connectedComponent as TabSentFriendRequests};