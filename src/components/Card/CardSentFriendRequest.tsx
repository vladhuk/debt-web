import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardSentRequestHeader } from './CardHeader';
import { StatusName, User } from '../../types/response';

interface Props {
  user: User;
  comment: string;
  status: StatusName;
  date: string;
  onDelete(): void;
}

export function CardSentFriendRequest(props: Props): JSX.Element {
  const { user, comment, status, date, onDelete } = props;

  return (
    <Toast className="card-request my-3">
      <CardSentRequestHeader user={user} status={status} onDelete={onDelete} />
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
