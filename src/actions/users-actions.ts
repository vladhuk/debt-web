import { getData } from '../api';
import { User } from '../types/response';
import { CustomAction, CustomThunkAction } from '../types/redux';

export const GET_CURRENT_USER = 'users:getCurrent';
export const GET_USER_BY_ID = 'users:getById';
export const GET_USER_BY_USERNAME = 'users:getByUsername';

const URL = '/users';

export function getCurrentUser(user: User): CustomAction {
  return {
    type: GET_CURRENT_USER,
    payload: {
      currentUser: user,
    },
  };
}

export function getCurrentUserRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/current`,
      onSuccess: (user: User) => dispatch(getCurrentUser(user)),
    });
}
