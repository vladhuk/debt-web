import React from 'react';
import Toast from "react-bootstrap/Toast";
import './UserCard.css';

function UserCard(props) {
    return <Toast className='friend-card my-3' onClose={props.onClose}>
        <Toast.Header>
            <h4 className='text-dark mr-auto'>{props.user.name}</h4>
        </Toast.Header>
        <Toast.Body className='py-1'>
            <div className='text-secondary'>@{props.user.username}</div>
        </Toast.Body>
    </Toast>;
}

export default UserCard;