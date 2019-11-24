import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AddFriendModal from "./add-friend-modal/AddFriendModal";
import Row from "react-bootstrap/Row";
import UserCard from "../../user-card/UserCard";
import ModalConfirmDelete from "../../modal-confirm-delete/ModalConfirmDelete";


function AllFriendsTab() {
    const [addFriendModalShow, setAddFriendModalShow] = React.useState(false);
    const [deleteFriendModalShow, setDeleteFriendModalShow] = React.useState(false);
    const [userIdForDelete, setUserIdForDelete] = React.useState();

    const testFriends = [{id: 1, name: 'Bill', username: 'bill'}, {id: 2, name: 'John', username: 'john'}];

    const deleteUser = id => {
        // logic

        setDeleteFriendModalShow(false);
    };

    return <Container className='px-0 py-5'>
        <Row className='border-bottom pb-2'>
            <h1>Friends</h1>

            <ButtonToolbar className='ml-auto'>
                <Button
                    variant="primary"
                    onClick={() => setAddFriendModalShow(true)}
                >
                    Add friend
                </Button>

                <AddFriendModal
                    show={addFriendModalShow}
                    onHide={() => setAddFriendModalShow(false)}
                />
            </ButtonToolbar>
        </Row>

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