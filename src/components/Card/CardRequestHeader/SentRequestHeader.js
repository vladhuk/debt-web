import React from 'react';
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import {Icon, IconAccepted, IconRejected, IconViewed} from "../../Icon";

export default function SentRequestHeader(props) {
    return <Toast.Header closeButton={false}>
        {getStatusIcon(props.status)}
        <h4 className='text-dark ml-2 mr-1'>{props.user.name}</h4>
        <div className='text-secondary mr-auto'>(@{props.user.username})</div>
        {
            props.status === 'SENT'
                ? <Button variant='danger' onClick={props.onDelete}>Delete</Button>
                : <Button variant='secondary' disabled='disabled'>Delete</Button>
        }
    </Toast.Header>
}

function getStatusIcon(status) {
    switch (status) {
        case 'VIEWED': return <IconViewed/>;
        case 'ACCEPTED': return <IconAccepted/>;
        case 'REJECTED': return <IconRejected/>;
        default: return <Icon className='opacity-0'/>;
    }
}