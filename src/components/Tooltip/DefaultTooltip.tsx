import * as React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface Props {
  text: string;
  children: JSX.ElementChildrenAttribute;
}

export function DefaultTooltip(props: Props): JSX.Element {
  const { text, children } = props;

  return (
    <OverlayTrigger
      overlay={<Tooltip id={`default-tooltip${text}`}>{text}</Tooltip>}
      delay={{ show: 400, hide: 0 }}
    >
      {children}
    </OverlayTrigger>
  );
}
