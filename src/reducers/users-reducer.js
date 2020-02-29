// @flow

import {
  GET_CURRENT_USER,
  GET_USER_BY_ID,
  GET_USER_BY_USERNAME,
} from '../actions/users-actions';
import type { Action, UserState } from '../types/redux';

const initialState: UserState = {
  currentUser: null,
  user: null,
};

export function usersReducer(
  state: UserState = initialState,
  { type, payload = {} }: Action
): UserState {
  switch (type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: payload.group,
      };
    case GET_USER_BY_USERNAME:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
}
