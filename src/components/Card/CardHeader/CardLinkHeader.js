import Toast from "react-bootstrap/Toast";
import React from "react";

export function CardLinkHeader(props) {
    return <Toast.Header
        className='link-header'
        onClick={props.onTitleClick}
        closeButton={props.closeButton && true}
    >
        <h4 className={'text-dark ' + (props.username ? 'mr-1' : 'mr-auto')}>{props.name}</h4>
        {
            props.username && <div className='text-secondary mr-auto'>(@{props.username})</div>
        }
    </Toast.Header>
}