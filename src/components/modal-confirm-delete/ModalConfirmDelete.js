import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";

function ModalConfirmDelete(props) {
    return <Modal
        show={props.show}
        onHide={props.onHide}
    >
        <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>{props.children}</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
            <Button variant="danger" onClick={props.onDelete}>Delete</Button>
        </Modal.Footer>
    </Modal>
}

export default ModalConfirmDelete;