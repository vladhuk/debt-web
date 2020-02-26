// @flow

import type { Status } from './Status';
import type { User } from './User';
import type { DateAudit } from './DateAudit';

export type Request = {|
  id?: number,
  status?: Status,
  comment?: string,
  sender?: User,
  ...DateAudit,
|};
