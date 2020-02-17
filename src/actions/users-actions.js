import {getData} from '../api';

export const GET_CURRENT_USER = 'users:getCurrent';
export const GET_USER_BY_ID = 'users:getById';
export const GET_USER_BY_USERNAME = 'users:getByUsername';

const URL = '/users';

export function getCurrentUser(user) {
  return {
    type: GET_CURRENT_USER,
    payload: {
      currentUser: user,
    },
  };
}

export function getUserById(user) {
  return {
    type: GET_USER_BY_ID,
    payload: {
      user: user,
    },
  };
}

export function getUserByUsername(user) {
  return {
    type: GET_USER_BY_USERNAME,
    payload: {
      members: user,
    },
  };
}

export function getCurrentUserRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/current',
      onSuccess: user => dispatch(getCurrentUser(user)),
    });
}

export function getUserByIdRequest(id) {
  return dispatch =>
    getData({
      resourcePath: URL + `/id/${id}`,
      onSuccess: user => dispatch(getUserById(user)),
    });
}

export function getUserByUsernameRequest(username) {
  return dispatch =>
    getData({
      resourcePath: URL + `/username/${username}`,
      onSuccess: user => dispatch(getUserByUsername(user)),
    });
}
