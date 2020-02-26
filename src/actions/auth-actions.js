// @flow

import { postData } from '../api';
import type {
  JwtAuthResponse,
  LoginRequest,
  SignUpRequest,
} from '../types/payload';
import type { ApiResponseError } from '../types/api';
import type { Action, ThunkAction } from '../types/redux';

export const SIGN_IN_SUCCESS = 'auth:signInSuccess';
export const SIGN_IN_ERROR = 'auth:signInError';
export const SIGN_UP_SUCCESS = 'auth:signUpSuccess';
export const SIGN_UP_ERROR = 'auth:signUpError';
export const CLEAN_ERROR = 'auth:cleanError';
export const LOGOUT = 'auth:logout';

const URL = '/auth';

export function signInSuccess({
  accessToken,
  tokenType,
}: JwtAuthResponse): Action {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      accessToken: `${tokenType} ${accessToken}`,
    },
  };
}

export function signInError(error: ApiResponseError): Action {
  return {
    type: SIGN_IN_ERROR,
    payload: {
      error,
    },
  };
}

export function signUpSuccess({
  accessToken,
  tokenType,
}: JwtAuthResponse): Action {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      accessToken: `${tokenType} ${accessToken}`,
    },
  };
}

export function signUpError(error: ApiResponseError): Action {
  return {
    type: SIGN_UP_ERROR,
    payload: {
      error,
    },
  };
}

export function cleanError(): Action {
  return {
    type: CLEAN_ERROR,
  };
}

export function logout(): Action {
  return {
    type: LOGOUT,
  };
}

export function signInRequest(data: LoginRequest): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: `${URL}/signin`,
      data,
      onSuccess: payload => dispatch(signInSuccess(payload)),
      onError: error => dispatch(signInError(error)),
    });
}

export function signUpRequest(data: SignUpRequest): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: `${URL}/signup`,
      data,
      onSuccess: payload => dispatch(signUpSuccess(payload)),
      onError: error => dispatch(signUpError(error)),
    });
}
