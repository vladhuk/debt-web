import React, {useEffect} from "react";
import {TitleWithButton} from "../../../Title";
import {ModalAddFriend, ModalConfirmDelete} from "../../../Modal";
import {UserCard} from "../../../Card";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteFriendRequest, getAllFriendsRequest} from "../../../../actions/friends-actions";
import {PageContainer} from "../../../Container";

function TabAllFriends(props) {
    const [addFriendModalShow, setAddFriendModalShow] = React.useState(false);
    const [deleteFriendModalShow, setDeleteFriendModalShow] = React.useState(false);
    const [userIdForDelete, setUserIdForDelete] = React.useState();

    const deleteUser = id => {
        props.deleteFriend(id);
        setDeleteFriendModalShow(false);
    };

    useEffect(() => {
        props.getAllFriends();
    }, []);

    return <PageContainer>
        <TitleWithButton title='Friends'
                         buttonTitle='Add friend'
                         onButtonClick={() => setAddFriendModalShow(true)}
        >
            <ModalAddFriend
                show={addFriendModalShow}
                onHide={() => setAddFriendModalShow(false)}
            />
        </TitleWithButton>

        {
            props.friends.map(user =>
                <UserCard
                    key={user.id}
                    user={user}
                    onClose={() => {
                        setDeleteFriendModalShow(true);
                        setUserIdForDelete(user.id);
                    }}
                />
            )
        }

        <ModalConfirmDelete
            show={deleteFriendModalShow}
            onHide={() => setDeleteFriendModalShow(false)}
            onDelete={() => deleteUser(userIdForDelete)}
        >
            Do you want to delete friend?
        </ModalConfirmDelete>
    </PageContainer>
}

const mapStateToProps = state => ({
    friends: state.friends,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllFriends: getAllFriendsRequest,
    deleteFriend: deleteFriendRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabAllFriends);

export {connectedComponent as TabAllFriends};