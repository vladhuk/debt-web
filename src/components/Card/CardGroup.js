import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import {CardLinkHeader} from './CardHeader';

export function CardGroup(props) {
  return (
    <Toast className="user-card my-3" onClose={props.onClose}>
      <CardLinkHeader onTitleClick={props.onTitleClick} name={props.title} />
    </Toast>
  );
}
