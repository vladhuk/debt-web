import Toast from 'react-bootstrap/Toast';
import React from 'react';

interface Props {
  closeButton?: boolean;
  username?: string;
  name: string;
  onTitleClick?: () => void;
}

export function CardLinkHeader(props: Props): JSX.Element {
  const { closeButton, username, name, onTitleClick } = props;

  return (
    <Toast.Header className="link-header" closeButton={closeButton && true}>
      <h4
        className={`text-dark ${username ? 'mr-1' : 'mr-auto'}`}
        onClick={onTitleClick}
      >
        {name}
      </h4>
      {username && <div className="text-secondary mr-auto">(@{username})</div>}
    </Toast.Header>
  );
}
