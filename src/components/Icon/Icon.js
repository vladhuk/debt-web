import React from 'react';
import './index.css';

export function Icon(props) {
    return <img className='icon' src={props.src} alt={props.alt} />
}