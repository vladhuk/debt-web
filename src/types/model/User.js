// @flow

import type { DateAudit } from './DateAudit';

export type User = {|
  id?: number,
  username?: string,
  name?: string,
  ...DateAudit,
|};
