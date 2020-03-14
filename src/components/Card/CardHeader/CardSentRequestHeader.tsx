import React from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { getStatusIcon } from '../util/status-icon-provider';
import { STATUS } from '../../../constants';
import { User, StatusName } from '../../../types/response';

interface Props {
  user?: User;
  status: StatusName;
  isForcedDisabledButton?: boolean;
  onDelete(): void;
}

export function CardSentRequestHeader(props: Props): JSX.Element {
  const { user, status, isForcedDisabledButton, onDelete } = props;

  const deleteButton = (
    <Button variant="danger" onClick={onDelete}>
      Delete
    </Button>
  );

  return (
    <Toast.Header closeButton={false}>
      {getStatusIcon(status)}
      <h4 className="text-dark ml-2 mr-1">{(user && user.name) || '\u00a0'}</h4>
      <div className="text-secondary mr-auto">
        {user && `(@${user.username})`}
      </div>
      {!isForcedDisabledButton &&
        [STATUS.SENT, STATUS.VIEWED].includes(status) &&
        deleteButton}
    </Toast.Header>
  );
}
