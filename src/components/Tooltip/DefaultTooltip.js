import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function DefaultTooltip({ text, children }) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={'default-tooltip' + text}>{text}</Tooltip>}
      delay={{ show: 400 }}
    >
      {children}
    </OverlayTrigger>
  );
}
