// @flow

import { getData } from '../api';
import type { Action, ThunkAction } from '../types/redux';
import type { User } from '../types/model';

export const GET_CURRENT_USER = 'users:getCurrent';
export const GET_USER_BY_ID = 'users:getById';
export const GET_USER_BY_USERNAME = 'users:getByUsername';

const URL = '/users';

export function getCurrentUser(user: User): Action {
  return {
    type: GET_CURRENT_USER,
    payload: {
      currentUser: user,
    },
  };
}

export function getUserById(user: User): Action {
  return {
    type: GET_USER_BY_ID,
    payload: {
      user,
    },
  };
}

export function getUserByUsername(user: User): Action {
  return {
    type: GET_USER_BY_USERNAME,
    payload: {
      members: user,
    },
  };
}

export function getCurrentUserRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/current`,
      onSuccess: user => dispatch(getCurrentUser(user)),
    });
}

export function getUserByIdRequest(id: number): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/id/${id}`,
      onSuccess: user => dispatch(getUserById(user)),
    });
}

export function getUserByUsernameRequest(username: string): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/username/${username}`,
      onSuccess: user => dispatch(getUserByUsername(user)),
    });
}
