import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardLinkHeader } from './CardHeader';

interface Props {
  title: string;
  onClose(): void;
  onTitleClick(): void;
}

export function CardGroup(props: Props): JSX.Element {
  const { title, onClose, onTitleClick } = props;

  return (
    <Toast className="user-card my-3" onClose={onClose}>
      <CardLinkHeader onTitleClick={onTitleClick} name={title} />
    </Toast>
  );
}
