import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';

export function RequestCard(props) {
    return <Toast className='user-card my-3' onClose={props.onClose}>
        <Toast.Header>
            <div className='viewed'/>
            <h4 className='text-dark mr-auto'>{props.user.name}</h4>
        </Toast.Header>
        <Toast.Body className='py-1'>
            <div className='text-secondary'>@{props.user.username}</div>
        </Toast.Body>
    </Toast>;
}