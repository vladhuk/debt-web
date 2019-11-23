import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AddFriendModal from "./add-friend-modal/AddFriendModal";
import Row from "react-bootstrap/Row";


function AllFriendsTab() {
    const [modalShow, setModalShow] = React.useState(false);

    return <Container className='px-0 py-5'>
        <Row className='border-bottom pb-2'>
            <h1>Friends</h1>

            <ButtonToolbar className='ml-auto'>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add friend
                </Button>

                <AddFriendModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
        </Row>
    </Container>
}

export default AllFriendsTab;