import { postData } from '../api';

export const SIGN_IN_SUCCESS = 'auth:signInSuccess';
export const SIGN_IN_ERROR = 'auth:signInError';
export const SIGN_UP_SUCCESS = 'auth:signUpSuccess';
export const SIGN_UP_ERROR = 'auth:signUpError';
export const CLEAN_ERROR = 'auth:cleanError';
export const LOGOUT = 'auth:logout';

const URL = '/auth';

export function signInSuccess({ accessToken, tokenType }) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      accessToken: tokenType + ' ' + accessToken,
    },
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: {
      error: error,
    },
  };
}

export function signUpSuccess({ accessToken, tokenType }) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      accessToken: tokenType + ' ' + accessToken,
    },
  };
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    payload: {
      error: error,
    },
  };
}

export function cleanError() {
  return {
    type: CLEAN_ERROR,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function signInRequest(data) {
  return dispatch =>
    postData({
      resourcePath: URL + '/signin',
      data: data,
      onSuccess: payload =>
        dispatch(signInSuccess(payload)).then(() => alert('dispatch')),
      onError: error => dispatch(signInError(error)),
    });
}

export function signUpRequest(data) {
  return dispatch =>
    postData({
      resourcePath: URL + '/signup',
      data: data,
      onSuccess: payload => dispatch(signUpSuccess(payload)),
      onError: error => dispatch(signUpError(error)),
    });
}
