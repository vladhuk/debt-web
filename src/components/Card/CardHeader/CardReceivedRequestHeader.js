import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {getStatusIcon} from './util';
import {STATUS} from '../../../constants';

export function CardReceivedRequestHeader(props) {
  const headerButtons = (
    <>
      <Button variant="primary" className="mr-1" onClick={props.onAccept}>
        Accept
      </Button>
      <Button variant="danger" onClick={props.onReject}>
        Reject
      </Button>
    </>
  );

  return (
    <Toast.Header closeButton={false}>
      {getStatusIcon(props.status)}
      <h4 className="text-dark ml-2 mr-1">
        {(props.user && props.user.name) || '\u00a0'}
      </h4>
      <div className="text-secondary mr-auto">
        {props.user && `(@${props.user.username})`}
      </div>
      {![STATUS.ACCEPTED, STATUS.REJECTED].includes(props.status) &&
        headerButtons}
    </Toast.Header>
  );
}
