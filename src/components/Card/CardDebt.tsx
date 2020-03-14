import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './index.css';
import { CardLinkHeader } from './CardHeader';
import { Debt } from '../../types/response';

interface Props {
  debt: Debt;
}

export function CardDebt(props: Props): JSX.Element {
  const { debt } = props;

  return (
    <Toast className="user-card my-3">
      <CardLinkHeader
        name={debt.partner.name}
        username={debt.partner.username}
        closeButton={false}
      />
      <Toast.Body className="py-2">
        {debt.balance > 0 ? (
          <h5 className="text-success m-0">You lent {debt.balance}</h5>
        ) : (
          <h5 className="text-danger m-0">You owe {Math.abs(debt.balance)}</h5>
        )}
      </Toast.Body>
    </Toast>
  );
}
