// @flow

import type { User } from '../model';

export type DebtResponse = {|
  partner: User,
  balance: number,
|};
