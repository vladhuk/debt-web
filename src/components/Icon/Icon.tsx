import React from 'react';
import './index.css';

export interface IconProps {
  className?: string;
  alt?: string;
  src?: string;
}

export function Icon(props: IconProps): JSX.Element {
  const { className, alt } = props;

  return <img className={`icon ${className || ''}`} alt={alt} />;
}
