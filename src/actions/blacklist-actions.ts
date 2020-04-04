import { deleteData, getData, postData } from '../api';
import { User } from '../types/response';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { UserPayload } from '../types/request';

export const GET_FULL_BLACKLIST = 'blacklist:getAll';
export const ADD_TO_BLACKLIST = 'blacklist:add';
export const DELETE_FROM_BLACKLIST = 'blacklist:delete';

const URL = '/blacklist';

export function getFullBlacklist(blacklist: User[]): CustomAction {
  return {
    type: GET_FULL_BLACKLIST,
    payload: {
      blacklist,
    },
  };
}

export function addToBlacklist(): CustomAction {
  return {
    type: ADD_TO_BLACKLIST,
  };
}

export function deleteFromBlacklist(): CustomAction {
  return {
    type: DELETE_FROM_BLACKLIST,
  };
}

export function getFullBlacklistRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: URL,
      onSuccess: (blacklist: User[]) => dispatch(getFullBlacklist(blacklist)),
    });
}

export function addToBlacklistRequest(data: UserPayload): CustomThunkAction {
  return (dispatch): Promise<void> =>
    postData({
      resourcePath: URL,
      data,
      onSuccess: () => dispatch(addToBlacklist()),
    });
}

export function deleteFromBlacklistRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/${id}`,
      onSuccess: () => dispatch(deleteFromBlacklist()),
    });
}
