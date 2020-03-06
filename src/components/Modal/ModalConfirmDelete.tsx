import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  show: boolean;
  children: string;
  onHide(): void;
  onDelete(): void;
}

export function ModalConfirmDelete(props: Props): JSX.Element {
  const { show, children, onHide, onDelete } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{children}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
