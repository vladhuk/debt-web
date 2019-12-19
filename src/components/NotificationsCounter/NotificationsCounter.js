import Badge from "react-bootstrap/Badge";
import React from "react";

function NotificationsCounter(props) {
    return <sup>
        {
            (props.children || props.children === '0')
                ? <Badge pill variant='success'>
                    {props.children}
                </Badge>
                : null
        }
    </sup>
}

export default NotificationsCounter;