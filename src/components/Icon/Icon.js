import React from 'react';
import './index.css';

export function Icon(props) {
    return <img className={'icon ' + (props.className || '')} src={props.src} alt={props.alt} />
}