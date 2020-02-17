import Toast from 'react-bootstrap/Toast';
import React from 'react';

export function CardLinkHeader(props) {
  return (
    <Toast.Header
      className="link-header"
      closeButton={props.closeButton && true}
    >
      <h4
        className={'text-dark ' + (props.username ? 'mr-1' : 'mr-auto')}
        onClick={props.onTitleClick}
      >
        {props.name}
      </h4>
      {props.username && (
        <div className="text-secondary mr-auto">(@{props.username})</div>
      )}
    </Toast.Header>
  );
}
