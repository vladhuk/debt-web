import {
  DebtRequest,
  FriendRequest,
  Group,
  RepaymentRequest,
  User,
} from '../model';
import { Debt } from '../payload';

export interface AuthState {
  readonly accessToken: string;
  readonly error: Error;
}

export type BlacklistState = User[];

export interface DebtRequestState {
  readonly sent: DebtRequest[];
  readonly received: DebtRequest[];
  readonly number: number;
  readonly isNeededToUpdateList: boolean;
}

export interface FriendRequestState {
  readonly sent: FriendRequest[];
  readonly received: FriendRequest[];
  readonly number: number;
  readonly isNeededToUpdateList: boolean;
}

export interface RepaymentRequestState {
  readonly sent: RepaymentRequest[];
  readonly received: RepaymentRequest[];
  readonly number: number;
  readonly isNeededToUpdateList: boolean;
}

export type DebtState = Debt[];

export interface GroupState {
  readonly groups: Group[];
  readonly group: Group;
  readonly members: User[];
  readonly isNeededToUpdateList: boolean;
}

export interface FriendsState {
  readonly list: User[];
  readonly isNeededToUpdateList: boolean;
}

export interface UserState {
  readonly currentUser: User;
  readonly user: User;
}

export interface State {
  readonly friends: FriendsState;
  readonly auth: AuthState;
  readonly blacklist: BlacklistState;
  readonly friendRequests: FriendRequestState;
  readonly debtRequests: DebtRequestState;
  readonly repaymentRequests: RepaymentRequestState;
  readonly groups: GroupState;
  readonly users: UserState;
  readonly debts: DebtState;
}
