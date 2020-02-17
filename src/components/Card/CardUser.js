import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import {CardLinkHeader} from './CardHeader';

export function CardUser(props) {
  return (
    <Toast className="user-card my-3" onClose={props.onClose}>
      <CardLinkHeader name={props.user.name} username={props.user.username} />
    </Toast>
  );
}
