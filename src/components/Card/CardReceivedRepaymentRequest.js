import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';
import {CardReceivedRequestHeader} from "./CardHeader";


export function CardReceivedRepaymentRequest(props) {
    return <Toast className='card-request my-3'>
        <CardReceivedRequestHeader
            status={props.request.status.name}
            user={props.request.sender}
            onAccept={props.onAccept}
            onReject={props.onReject}
        />
        <Toast.Body className='py-2'>
            <h5 className='m-0'>You get paid: {props.request.order.amount}</h5>
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
