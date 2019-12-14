import Badge from "react-bootstrap/Badge";
import React from "react";

function NotificationsCounter(props) {
    return <sup><Badge pill variant='success'>
        {props.children}
    </Badge></sup>
}

export default NotificationsCounter;