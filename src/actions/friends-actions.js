// @flow

import { deleteData, getData } from '../api';
import type { Action, ThunkAction } from '../types/redux';
import type { User } from '../types/model';

export const GET_ALL_FRIENDS = 'friends:getAll';
export const DELETE_FRIEND = 'friends:delete';

const URL = '/friends';

export function getAllFriends(friends: User[]): Action {
  return {
    type: GET_ALL_FRIENDS,
    payload: {
      friends,
    },
  };
}

export function deleteFriend(): Action {
  return {
    type: DELETE_FRIEND,
  };
}

export function getAllFriendsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: URL,
      onSuccess: friends => dispatch(getAllFriends(friends)),
    });
}

export function deleteFriendRequest(id: number): ThunkAction {
  return dispatch =>
    deleteData({
      resourcePath: `${URL}/${id}`,
      onSuccess: () => dispatch(deleteFriend()),
    });
}
