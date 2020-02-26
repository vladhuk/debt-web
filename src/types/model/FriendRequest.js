// @flow

import type { Request } from './Request';
import type { User } from './User';

export type FriendRequest = {|
  receiver?: User,
  ...Request,
|};
