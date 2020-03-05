import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface Props {
  show: boolean;
  title: string;
  size?: 'sm' | 'lg' | 'xl';
  body: JSX.Element;
  onHide(): void;
}

export function ModalDefault(props: Props): JSX.Element {
  const { show, title, size, body, onHide } = props;

  return (
    <Modal size={size} onHide={onHide} show={show} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}
