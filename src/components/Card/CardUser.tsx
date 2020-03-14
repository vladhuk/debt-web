import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardLinkHeader } from './CardHeader';
import { User } from '../../types/response';

interface Props {
  user: User;
  onClose(): void;
}

export function CardUser(props: Props): JSX.Element {
  const { user, onClose } = props;

  return (
    <Toast className="user-card my-3" onClose={onClose}>
      <CardLinkHeader name={user.name} username={user.username} />
    </Toast>
  );
}
