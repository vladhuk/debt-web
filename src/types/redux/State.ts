import {
  DebtRequest,
  FriendRequest,
  Group,
  RepaymentRequest,
  User,
  Debt,
} from '../response';

export interface AuthState {
  readonly accessToken: string | null;
  readonly error: Error | null;
}

export type BlacklistState = User[];

interface RequestState {
  readonly number: number;
  readonly isNeededToUpdateList: boolean;
}

export interface DebtRequestState extends RequestState {
  readonly sent: DebtRequest[];
  readonly received: DebtRequest[];
}

export interface FriendRequestState extends RequestState {
  readonly sent: FriendRequest[];
  readonly received: FriendRequest[];
}

export interface RepaymentRequestState extends RequestState {
  readonly sent: RepaymentRequest[];
  readonly received: RepaymentRequest[];
}

export type DebtState = Debt[];

export interface GroupState {
  readonly groups: Group[];
  readonly group: Group | null;
  readonly members: User[];
  readonly isNeededToUpdateList: boolean;
}

export interface FriendsState {
  readonly list: User[];
  readonly isNeededToUpdateList: boolean;
}

export interface UserState {
  readonly currentUser: User | null;
  readonly user: User | null;
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
