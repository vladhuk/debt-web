import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';
import {CardLinkHeader} from './CardHeader'


export function CardUser(props) {
    return <Toast className='user-card my-3'>
        <CardLinkHeader onClose={props.onClose}>
            {props.user.name}
        </CardLinkHeader>
        <Toast.Body className='py-1'>
            <div className='text-secondary'>@{props.user.username}</div>
        </Toast.Body>
    </Toast>;
}