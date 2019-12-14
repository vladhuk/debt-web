import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import {TitleWithButton} from "../../../Title";
import {ModalAddFriend, ModalConfirmDelete} from "../../../Modal";
import UserCard from "../../../UserCard";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllFriendsRequest} from "../../../../actions/friends-actions";

function TabAllFriends(props) {
    const [addFriendModalShow, setAddFriendModalShow] = React.useState(false);
    const [deleteFriendModalShow, setDeleteFriendModalShow] = React.useState(false);
    const [userIdForDelete, setUserIdForDelete] = React.useState();

    const deleteUser = id => {
        // logic
        setDeleteFriendModalShow(false);
    };

    useEffect(() => {
        props.getAllFriends();
    }, []);

    return <Container className='col-md-9 py-5'>
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
    </Container>
}

const mapStateToProps = state => ({
    friends: state.friends,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllFriends: getAllFriendsRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabAllFriends);

export {connectedComponent as TabAllFriends};