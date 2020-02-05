import React from 'react';
import {Icon} from "./Icon";
import image from './../../assets/icons/viewed.svg';

export function IconViewed(props) {
    return <Icon className='opacity-50' src={image} {...props} />;
}