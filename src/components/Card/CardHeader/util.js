import {Icon, IconAccepted, IconRejected, IconViewed} from '../../Icon';
import React from 'react';
import {STATUS} from '../../../constants';
import {DefaultTooltip} from '../../Tooltip';

export function getStatusIcon(status) {
  switch (status) {
    case STATUS.VIEWED:
      return (
        <DefaultTooltip text="Viewed">
          <IconViewed />
        </DefaultTooltip>
      );
    case STATUS.ACCEPTED:
      return (
        <DefaultTooltip text="Accepted">
          <IconAccepted />
        </DefaultTooltip>
      );
    case STATUS.REJECTED:
      return (
        <DefaultTooltip text="Rejected">
          <IconRejected />
        </DefaultTooltip>
      );
    default:
      return <Icon className="opacity-0" />;
  }
}
