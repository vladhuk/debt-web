import React from 'react';
import Toast from "react-bootstrap/Toast";
import './index.css';
import {CardReceivedRequestHeader} from "./CardRequestHeader";


export function CardReceivedFriendRequest(props) {
    return <Toast className='card-request my-3'>
        <CardReceivedRequestHeader {...props} />
        <Toast.Body className='py-2'>
            <i className='text-secondary mr-auto'>
                {props.comment || <>-- No comment --</>}
            </i>
        </Toast.Body>
        <Toast.Header closeButton={false} className='p-0'/>
        <Toast.Body className='text-secondary py-0'>
            <i>{props.date}</i>
        </Toast.Body>
    </Toast>;
}
