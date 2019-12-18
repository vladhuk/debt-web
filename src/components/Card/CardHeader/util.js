import {Icon, IconAccepted, IconRejected, IconViewed} from "../../Icon";
import React from "react";

export function getStatusIcon(status) {
    switch (status) {
        case 'VIEWED':
            return <IconViewed/>;
        case 'ACCEPTED':
            return <IconAccepted/>;
        case 'REJECTED':
            return <IconRejected/>;
        default:
            return <Icon className='opacity-0'/>;
    }
}