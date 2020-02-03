import React from 'react';
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import {getStatusIcon} from "./util";
import {STATUS} from "../../../constants";

export function CardSentRequestHeader(props) {
    return <Toast.Header closeButton={false}>
        {getStatusIcon(props.status)}
        <h4 className='text-dark ml-2 mr-1'>{props.user && props.user.name}</h4>
        <div className='text-secondary mr-auto'>{props.user && (`(@${props.user.username})`)}</div>
        {
            !props.forcedDisabledButton && (props.status === STATUS.SENT || props.status === STATUS.VIEWED)
                ? <Button variant='danger' onClick={props.onDelete}>Delete</Button>
                : <Button variant='secondary' disabled='disabled'>Delete</Button>
        }
    </Toast.Header>
}
