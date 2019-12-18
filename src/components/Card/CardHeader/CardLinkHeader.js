import Toast from "react-bootstrap/Toast";
import React from "react";

export function CardLinkHeader(props) {
    return <Toast.Header className='link-header' onClick={props.onTitleClick}>
        <h4 className='text-dark mr-auto'>{props.children}</h4>
    </Toast.Header>
}