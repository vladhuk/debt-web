import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import React from "react";
import {getStatusIcon} from "./util";
import {STATUS} from "../../../constants";

export function CardReceivedRequestHeader(props) {
    return <Toast.Header closeButton={false}>
        {getStatusIcon(props.status)}
        <h4 className='text-dark ml-2 mr-1'>{props.user && props.user.name}</h4>
        <div className='text-secondary mr-auto'>{props.user && (`(@${props.user.username})`)}</div>
        {
            props.status !== STATUS.ACCEPTED && props.status !== STATUS.REJECTED
                ? <>
                    <Button variant='primary' className='mr-1' onClick={props.onAccept}>Accept</Button>
                    <Button variant='danger' onClick={props.onReject}>Reject</Button>
                </>
                : <>
                    <Button variant='secondary' className='mr-1' disabled='disabled'>Accept</Button>
                    <Button variant='secondary' disabled='disabled'>Reject</Button>
                </>
        }
    </Toast.Header>
}