import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { getStatusIcon } from '../util/status-icon-provider';
import { STATUS } from '../../../constants';
import { User } from '../../../types/model';
import { StatusName } from '../../../types/model/Status';

interface Props {
  user: User;
  status: StatusName;
  onAccept(): void;
  onReject(): void;
}

export function CardReceivedRequestHeader(props: Props): JSX.Element {
  const { user, status, onAccept, onReject } = props;

  const headerButtons = (
    <>
      <Button variant="primary" className="mr-1" onClick={onAccept}>
        Accept
      </Button>
      <Button variant="danger" onClick={onReject}>
        Reject
      </Button>
    </>
  );

  return (
    <Toast.Header closeButton={false}>
      {getStatusIcon(status)}
      <h4 className="text-dark ml-2 mr-1">{(user && user.name) || '\u00a0'}</h4>
      <div className="text-secondary mr-auto">
        {user && `(@${user.username})`}
      </div>
      {![STATUS.ACCEPTED, STATUS.REJECTED].includes(status) && headerButtons}
    </Toast.Header>
  );
}
