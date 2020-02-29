// @flow

import * as React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type Props = {|
  text: string,
  children: React.Node,
|};

export function DefaultTooltip(props: Props) {
  const { text, children } = props;

  return (
    <OverlayTrigger
      overlay={<Tooltip id={`default-tooltip${text}`}>{text}</Tooltip>}
      delay={{ show: 400 }}
    >
      {children}
    </OverlayTrigger>
  );
}
