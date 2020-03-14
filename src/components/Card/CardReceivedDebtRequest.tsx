import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardReceivedRequestHeader } from './CardHeader';
import { getStatusIcon } from './util/status-icon-provider';
import { DebtRequest, Order } from '../../types/response';

interface Props {
  request: DebtRequest;
  onAccept(): void;
  onReject(): void;
}

export function CardReceivedDebtRequest(props: Props): JSX.Element {
  const { request, onAccept, onReject } = props;

  const totalLent = request.orders
    .map(order => order.amount)
    .reduce((a, val) => a + val);

  return (
    <Toast className="card-request my-3">
      <CardReceivedRequestHeader
        status={request.status.name}
        user={request.sender}
        onAccept={onAccept}
        onReject={onReject}
      />
      <Toast.Body className="py-2">
        <h5 className="text-dark ml-2 mr-1">Total sum: {totalLent}</h5>
        {request.orders.map((order: Order) => (
          <Toast.Header key={order.id} closeButton={false}>
            {getStatusIcon(order.status.name)}
            <h6 className="text-secondary ml-2 mr-1 mb-0">
              {order.receiver.name}
            </h6>
            <div className="text-secondary mr-auto">
              (@{order.receiver.username})
            </div>
            <h6 className="m-0">You owe: {order.amount}</h6>
          </Toast.Header>
        ))}
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
