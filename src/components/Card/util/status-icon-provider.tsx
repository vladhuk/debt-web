import React from 'react';
import { Icon, IconAccepted, IconRejected, IconViewed } from '../../Icon';
import { STATUS } from '../../../constants';
import { DefaultTooltip } from '../../Tooltip';
import { StatusName } from '../../../types/model/Status';

export function getStatusIcon(status: StatusName): JSX.Element {
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
