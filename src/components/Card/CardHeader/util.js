import {Icon, IconAccepted, IconRejected, IconViewed} from "../../Icon";
import React from "react";
import {STATUS} from "../../../constants";

export function getStatusIcon(status) {
    switch (status) {
        case STATUS.VIEWED:
            return <IconViewed/>;
        case STATUS.ACCEPTED:
            return <IconAccepted/>;
        case STATUS.REJECTED:
            return <IconRejected/>;
        default:
            return <Icon className='opacity-0'/>;
    }
}