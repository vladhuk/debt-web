import React from 'react';
import { FormAddToBlacklist } from '../Form';
import { ModalDefault } from './ModalDefault';

interface Props {
  show: boolean;
  onHide(): void;
}

export function ModalAddToBlackList(props: Props): JSX.Element {
  const { show, onHide } = props;

  const body = <FormAddToBlacklist onSubmit={onHide} />;

  return (
    <ModalDefault
      show={show}
      title="Add to blacklist"
      body={body}
      onHide={onHide}
    />
  );
}
