import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardReceivedRequestHeader } from './CardHeader';
import { StatusName, User } from '../../types/response';

interface Props {
  user: User;
  status: StatusName;
  comment: string;
  date: string;
  onAccept(): void;
  onReject(): void;
}

export function CardReceivedFriendRequest(props: Props): JSX.Element {
  const { user, status, comment, date, onAccept, onReject } = props;

  return (
    <Toast className="card-request my-3">
      <CardReceivedRequestHeader
        onAccept={onAccept}
        onReject={onReject}
        user={user}
        status={status}
      />
      <Toast.Body className="py-2">
        <i className="text-secondary mr-auto">
          {comment || <>-- No comment --</>}
        </i>
      </Toast.Body>
      <Toast.Header closeButton={false} className="p-0" />
      <Toast.Body className="text-secondary py-0">
        <i>{date}</i>
      </Toast.Body>
    </Toast>
  );
}
