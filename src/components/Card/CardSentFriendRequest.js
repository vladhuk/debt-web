import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';
import SentRequestHeader from "./CardRequestHeader/SentRequestHeader";


export function CardSentFriendRequest(props) {
    return <Toast className='card-request my-3' onClose={props.onClose}>
        <SentRequestHeader {...props} />
        <Toast.Body className='py-1'>
            <i className='text-secondary mr-auto'>
                {props.comment || <>-- No comment --</>}
            </i>
        </Toast.Body>
    </Toast>;
}
