import React from "react";
import Modal from "react-bootstrap/Modal";
import AddFriendForm from "./add-friend-form/AddFriendForm";

function AddFriendModal(props) {
    return <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add friend
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddFriendForm onSubmit={props.onHide}/>
        </Modal.Body>
    </Modal>
}

export default AddFriendModal;