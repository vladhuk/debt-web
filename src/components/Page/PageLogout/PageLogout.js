import React from 'react';
import {Redirect} from "react-router";
import {deleteToken} from "../../../util";


export function PageLogout() {
    deleteToken();

    return <Redirect to='/signin' />
}