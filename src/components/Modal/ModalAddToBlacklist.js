import React from "react";
import Modal from "react-bootstrap/Modal";
import {FormAddToBlacklist} from "../Form";

function ModalAddToBlackList(props) {
    return <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add to blacklist
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormAddToBlacklist onSubmit={props.onHide}/>
        </Modal.Body>
    </Modal>
}

export {ModalAddToBlackList};