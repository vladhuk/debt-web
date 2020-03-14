import React from 'react';
import { FormRepayDebt } from '../Form';
import { ModalDefault } from './ModalDefault';
import { Debt } from '../../types/response';

interface Props {
  show: boolean;
  debts: Debt[];
  onHide(): void;
}

export function ModalRepayDebt(props: Props): JSX.Element {
  const { show, debts, onHide } = props;

  const body = <FormRepayDebt onSubmit={onHide} debts={debts} />;

  return (
    <ModalDefault show={show} title="Repay debt" body={body} onHide={onHide} />
  );
}
