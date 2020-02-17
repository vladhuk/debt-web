import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {FormCreateDebt} from '../Form';

function ModalCreateDebt(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create debt
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormCreateDebt onSubmit={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

export { ModalCreateDebt };
