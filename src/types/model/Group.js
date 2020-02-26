// @flow

import type { User } from './User';

export type Group = {|
  id?: number,
  title?: string,
  owner?: User,
  members?: User[],
|};
