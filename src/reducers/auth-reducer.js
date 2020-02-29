// @flow

import {
  CLEAN_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from '../actions/auth-actions';
import type { Action, AuthState } from '../types/redux';

const initialState: AuthState = {
  accessToken: null,
  error: null,
};

export function authReducer(
  state: AuthState = initialState,
  { type, payload = {} }: Action
): AuthState {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        error: payload.error,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        error: initialState.error,
      };
    default:
      return state;
  }
}
