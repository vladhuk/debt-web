import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';
import {CardReceivedRequestHeader} from "./CardHeader";
import {getStatusIcon} from "./CardHeader/util";


export function CardReceivedDebtRequest(props) {
    const totalLent = props.request.orders.map(order => order.amount).reduce((a, val) => (a + val));

    return <Toast className='card-request my-3'>
        <CardReceivedRequestHeader
            status={props.request.status.name}
            onAccept={props.onAccept}
            onReject={props.onReject}
        />
        <Toast.Body className='py-2'>
            <h5 className='text-dark ml-2 mr-1'>Total sum: {totalLent}</h5>
            {
                props.request.orders.map(order =>
                    <Toast.Header
                        key={order.id}
                        closeButton={false}
                        className='orders-body border-0'
                    >
                        {getStatusIcon(order.status.name)}
                        <h6 className='text-secondary ml-2 mr-1 mb-0'>{order.receiver.name}</h6>
                        <div className='text-secondary mr-auto'>(@{order.receiver.username})</div>
                        <h6 className='m-0'>You owe: {order.amount}</h6>
                    </Toast.Header>
                )
            }
        </Toast.Body>
        <Toast.Header closeButton={false} className='p-0'/>
        <Toast.Body className='py-2'>
            <i className='text-secondary mr-auto'>
                {props.request.comment || <>-- No comment --</>}
            </i>
        </Toast.Body>
        <Toast.Header closeButton={false} className='p-0'/>
        <Toast.Body className='text-secondary py-0'>
            <i>{props.request.createdAt}</i>
        </Toast.Body>
    </Toast>;
}
