import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {FormEditGroup} from '../Form';

export function ModalEditGroup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEditGroup
          onSubmit={props.onSubmit}
          onHide={props.onHide}
          group={props.group}
        />
      </Modal.Body>
    </Modal>
  );
}
