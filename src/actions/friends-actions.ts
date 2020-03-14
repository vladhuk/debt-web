import { deleteData, getData } from '../api';
import { User } from '../types/response';
import { CustomAction, CustomThunkAction } from '../types/redux';

export const GET_ALL_FRIENDS = 'friends:getAll';
export const DELETE_FRIEND = 'friends:delete';

const URL = '/friends';

export function getAllFriends(friends: User[]): CustomAction {
  return {
    type: GET_ALL_FRIENDS,
    payload: {
      friends,
    },
  };
}

export function deleteFriend(): CustomAction {
  return {
    type: DELETE_FRIEND,
  };
}

export function getAllFriendsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: URL,
      onSuccess: (friends: User[]) => dispatch(getAllFriends(friends)),
    });
}

export function deleteFriendRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/${id}`,
      onSuccess: () => dispatch(deleteFriend()),
    });
}
