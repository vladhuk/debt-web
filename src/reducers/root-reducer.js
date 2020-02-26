// @flow

import { combineReducers } from 'redux';
import { friendsReducer } from './friends-reducer';
import { authReducer } from './auth-reducer';
import { blacklistReducer } from './blacklist-reducer';
import { friendRequestsReducer } from './friend-requests-reducer';
import { groupsReducer } from './groups-reducer';
import { debtsReducer } from './debts-reducer';
import { debtRequestsReducer } from './debt-request-reducer';
import { repaymentRequestsReducer } from './repayment-requests-reducer';
import { usersReducer } from './users-reducer';
import { LOGOUT } from '../actions/auth-actions';
import type { State } from '../types/redux/State';
import type { Action } from '../types/redux';

const appReducer: (state: ?State, action: Action) => State = combineReducers(
  ({
    friends: friendsReducer,
    auth: authReducer,
    blacklist: blacklistReducer,
    friendRequests: friendRequestsReducer,
    groups: groupsReducer,
    debts: debtsReducer,
    debtRequests: debtRequestsReducer,
    repaymentRequests: repaymentRequestsReducer,
    users: usersReducer,
  }: State)
);

const rootReducer = (state: State, action: Action): State => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
