import React from 'react';
import { Icon } from './Icon';
import image from '../../assets/icons/rejected.svg';

export function IconRejected(): JSX.Element {
  return <Icon className="opacity-50" src={image} alt="rejected" />;
}
