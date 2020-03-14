import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardSentRequestHeader } from './CardHeader';
import { RepaymentRequest } from '../../types/response';

interface Props {
  request: RepaymentRequest;
  onDelete(): void;
}

export function CardSentRepaymentRequest(props: Props): JSX.Element {
  const { request, onDelete } = props;

  return (
    <Toast className="card-request my-3">
      <CardSentRequestHeader
        status={request.status.name}
        user={request.order.receiver}
        onDelete={onDelete}
      />
      <Toast.Body className="py-2">
        <h5 className="m-0">You repay: {request.order.amount}</h5>
      </Toast.Body>
      <Toast.Header closeButton={false} className="p-0" />
      <Toast.Body className="py-2">
        <i className="text-secondary mr-auto">
          {request.comment || <>-- No comment --</>}
        </i>
      </Toast.Body>
      <Toast.Header closeButton={false} className="p-0" />
      <Toast.Body className="text-secondary py-0">
        <i>{request.createdAt}</i>
      </Toast.Body>
    </Toast>
  );
}
