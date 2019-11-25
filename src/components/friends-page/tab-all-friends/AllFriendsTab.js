import React from "react";
import Container from "react-bootstrap/Container";
import AddFriendModal from "./add-friend-modal/AddFriendModal";
import UserCard from "../../user-card/UserCard";
import ModalConfirmDelete from "../../modal-confirm-delete/ModalConfirmDelete";
import TitleWithButtonModal from "../../title-with-button-modal/TitleWithButtonModal";


function AllFriendsTab() {
    const [addFriendModalShow, setAddFriendModalShow] = React.useState(false);
    const [deleteFriendModalShow, setDeleteFriendModalShow] = React.useState(false);
    const [userIdForDelete, setUserIdForDelete] = React.useState();

    const testFriends = [{id: 1, name: 'Bill', username: 'bill'}, {id: 2, name: 'John', username: 'john'}];

    const deleteUser = id => {
        // logic

        setDeleteFriendModalShow(false);
    };

    return <Container className='col-md-9 py-5'>
        <TitleWithButtonModal title='Friends'
                              buttonTitle='Add friend'
                              onButtonClick={() => setAddFriendModalShow(true)}
        >
            <AddFriendModal
                show={addFriendModalShow}
                onHide={() => setAddFriendModalShow(false)}
            />
        </TitleWithButtonModal>

        {
            testFriends.map(user =>
                <UserCard
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

export default AllFriendsTab;