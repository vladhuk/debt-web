// @flow

import type { User } from '../model';

export type Debt = {|
  +partner: User,
  +balance: number,
|};
