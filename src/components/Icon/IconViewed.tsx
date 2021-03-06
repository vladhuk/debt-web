import React from 'react';
import { Icon } from './Icon';
import image from '../../assets/icons/viewed.svg';

export function IconViewed(): JSX.Element {
  return <Icon className="opacity-50" src={image} />;
}
