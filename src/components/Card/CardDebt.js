import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';
import {CardLinkHeader} from './CardHeader'


export function CardDebt(props) {
    return <Toast className='user-card my-3'>
        <CardLinkHeader
            name={props.debt.partner.name}
            username={props.debt.partner.username}
            closeButton={false}
        />
        <Toast.Body className='py-2'>
            {
                props.debt.balance > 0
                ? <h5 className='text-success m-0'>You lent {props.debt.balance}</h5>
                : <h5 className='text-danger m-0'>You owe {Math.abs(props.debt.balance)}</h5>
            }
        </Toast.Body>
    </Toast>
}