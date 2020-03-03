import { postData } from '../api';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { JwtAuthResponse, LoginRequest, SignUpRequest } from '../types/payload';

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
}: JwtAuthResponse): CustomAction {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      accessToken: `${tokenType} ${accessToken}`,
    },
  };
}

export function signInError(error: Error): CustomAction {
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
}: JwtAuthResponse): CustomAction {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      accessToken: `${tokenType} ${accessToken}`,
    },
  };
}

export function signUpError(error: Error): CustomAction {
  return {
    type: SIGN_UP_ERROR,
    payload: {
      error,
    },
  };
}

export function cleanError(): CustomAction {
  return {
    type: CLEAN_ERROR,
  };
}

export function logout(): CustomAction {
  return {
    type: LOGOUT,
  };
}

export function signInRequest(data: LoginRequest): CustomThunkAction {
  return (dispatch): Promise<void> =>
    postData({
      resourcePath: `${URL}/signin`,
      data,
      onSuccess: (payload: JwtAuthResponse) => dispatch(signInSuccess(payload)),
      onError: error => dispatch(signInError(error)),
    });
}

export function signUpRequest(data: SignUpRequest): CustomThunkAction {
  return (dispatch): Promise<void> =>
    postData({
      resourcePath: `${URL}/signup`,
      data,
      onSuccess: (payload: JwtAuthResponse) => dispatch(signUpSuccess(payload)),
      onError: error => dispatch(signUpError(error)),
    });
}
