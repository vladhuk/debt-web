import React from 'react';
import { FormCreateDebt } from '../Form';
import { ModalDefault } from './ModalDefault';

interface Props {
  show: boolean;
  onHide(): void;
}

export function ModalCreateDebt(props: Props): JSX.Element {
  const { show, onHide } = props;

  const body = <FormCreateDebt onSubmit={onHide} />;

  return (
    <ModalDefault show={show} title="Create debt" body={body} onHide={onHide} />
  );
}
