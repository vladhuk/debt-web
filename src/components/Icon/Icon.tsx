import React from 'react';
import './index.css';

export interface IconProps {
  className?: string;
  alt?: string;
  src?: string;
}

export function Icon(props: IconProps): JSX.Element {
  const { className, src, alt } = props;

  return <img className={`icon ${className || ''}`} src={src} alt={alt} />;
}
