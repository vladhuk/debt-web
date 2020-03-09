import React from 'react';
import { FormEditGroup } from '../Form';
import { Group } from '../../types/model';
import { ModalDefault } from './ModalDefault';

interface Props {
  show: boolean;
  group?: Group;
  onHide(): void;
  onSubmit(group: Group): void;
}

export function ModalEditGroup(props: Props): JSX.Element {
  const { show, group, onHide, onSubmit } = props;

  const body = (
    <FormEditGroup onSubmit={onSubmit} onHide={onHide} group={group} />
  );

  return (
    <ModalDefault
      show={show}
      title="Group"
      body={body}
      onHide={onHide}
      size="lg"
    />
  );
}
