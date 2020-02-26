// @flow

import type { Status } from './Status';

export type Order = {|
  id?: number,
  amount: number,
  status?: Status,
|};
