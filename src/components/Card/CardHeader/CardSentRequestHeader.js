import React from 'react';
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import {getStatusIcon} from "./util";
import {STATUS} from "../../../constants";

export function CardSentRequestHeader(props) {
    const deleteButton = <Button variant='danger' onClick={props.onDelete}>Delete</Button>;

    return <Toast.Header closeButton={false}>
        {getStatusIcon(props.status)}
        <h4 className='text-dark ml-2 mr-1'>{props.user && props.user.name || '\u00a0'}</h4>
        <div className='text-secondary mr-auto'>{props.user && (`(@${props.user.username})`)}</div>
        {
            !props.forcedDisabledButton
                && [STATUS.SENT, STATUS.VIEWED].includes(props.status)
                && deleteButton
        }
    </Toast.Header>
}
