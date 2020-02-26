// @flow

import type { ApiResponseError } from '../api';
import type {
  DebtRequest,
  FriendRequest,
  Group,
  RepaymentRequest,
  User,
} from '../model';
import type { Debt } from '../payload';

export type AuthState = {|
  +accessToken: ?string,
  +error: ?ApiResponseError,
|};

export type BlacklistState = User[];

export type DebtRequestState = {|
  +sent: ?DebtRequest,
  +received: ?DebtRequest,
  +number: ?number,
  +isNeededToUpdateList: ?boolean,
|};

export type FriendRequestState = {|
  +sent: ?FriendRequest,
  +received: ?FriendRequest,
  +number: ?number,
  +isNeededToUpdateList: ?boolean,
|};

export type RepaymentRequestState = {|
  +sent: ?RepaymentRequest,
  +received: ?RepaymentRequest,
  +number: ?number,
  +isNeededToUpdateList: ?boolean,
|};

export type DebtState = Debt[];

export type GroupState = {
  +groups: Group[],
  +group: ?Group,
  +members: User[],
  +isNeededToUpdateList: ?boolean,
};

export type FriendsState = {|
  +list: User[],
  +isNeededToUpdateList: ?boolean,
|};

export type UserState = {
  +currentUser: ?User,
  +user: ?User,
};

export type State = {|
  +friends: FriendsState,
  +auth: AuthState,
  +blacklist: BlacklistState,
  +friendRequests: FriendRequestState,
  +debtRequests: DebtRequestState,
  +repaymentRequests: RepaymentRequestState,
  +groups: GroupState,
  +users: UserState,
  +debts: DebtState,
|};

export type GetState = () => State;
