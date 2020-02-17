import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {FormAddFriend} from '../Form';

function ModalAddFriend(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add friend</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAddFriend onSubmit={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

export { ModalAddFriend };
