import React from 'react';
import './index.css';

export function Icon({className, ...props}) {
    return <img className={'icon ' + (className || '')} {...props} />
}