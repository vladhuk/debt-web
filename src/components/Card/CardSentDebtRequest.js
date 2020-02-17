import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import {CardSentRequestHeader} from './CardHeader';
import {getStatusIcon} from './CardHeader/util';
import {STATUS} from '../../constants';

export function CardSentDebtRequest(props) {
  const totalLent = props.request.orders
    .map(order => order.amount)
    .reduce((a, val) => a + val);
  const existsAcceptedOrRejectedOrders = props.request.orders
    .map(order => order.status.name)
    .find(
      statusName =>
        statusName === STATUS.ACCEPTED || statusName === STATUS.REJECTED
    );

  return (
    <Toast className="card-request my-3">
      <CardSentRequestHeader
        status={props.request.status.name}
        forcedDisabledButton={existsAcceptedOrRejectedOrders}
        onDelete={props.onDelete}
      />
      <Toast.Body className="py-2">
        <h5 className="text-dark ml-2 mr-1">Total lent: {totalLent}</h5>
        {props.request.orders.map(order => (
          <Toast.Header key={order.id} closeButton={false}>
            {getStatusIcon(order.status.name)}
            <h6 className="text-secondary ml-2 mr-1 mb-0">
              {order.receiver.name}
            </h6>
            <div className="text-secondary mr-auto">
              (@{order.receiver.username})
            </div>
            <h6 className="m-0">You lent: {order.amount}</h6>
          </Toast.Header>
        ))}
      </Toast.Body>
      <Toast.Header closeButton={false} className="p-0" />
      <Toast.Body className="py-2">
        <i className="text-secondary mr-auto">
          {props.request.comment || <>-- No comment --</>}
        </i>
      </Toast.Body>
      <Toast.Header closeButton={false} className="p-0" />
      <Toast.Body className="text-secondary py-0">
        <i>{props.request.createdAt}</i>
      </Toast.Body>
    </Toast>
  );
}
