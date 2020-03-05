import React from 'react';
import { FormAddFriend } from '../Form';
import { ModalDefault } from './ModalDefault';

interface Props {
  show: boolean;
  onHide(): void;
}

export function ModalAddFriend(props: Props): JSX.Element {
  const { show, onHide } = props;

  const body = <FormAddFriend onSubmit={onHide} />;

  return (
    <ModalDefault show={show} title="Add friend" body={body} onHide={onHide} />
  );
}
