import Badge from 'react-bootstrap/Badge';
import React from 'react';

interface Props {
  children: number;
}

export default function NotificationsCounter(props: Props): JSX.Element | null {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <sup>
      <Badge pill variant="success">
        {children}
      </Badge>
    </sup>
  );
}
