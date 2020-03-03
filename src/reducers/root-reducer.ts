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
import { State, CustomAction } from '../types/redux';

const appReducer: (
  state: State | undefined,
  action: CustomAction
) => State = combineReducers({
  friends: friendsReducer,
  auth: authReducer,
  blacklist: blacklistReducer,
  friendRequests: friendRequestsReducer,
  groups: groupsReducer,
  debts: debtsReducer,
  debtRequests: debtRequestsReducer,
  repaymentRequests: repaymentRequestsReducer,
  users: usersReducer,
});

const rootReducer = (state: State, action: CustomAction): State => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
