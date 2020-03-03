import { deleteData, getData, postData } from '../api';
import { User } from '../types/model';
import { CustomAction, CustomThunkAction } from '../types/redux';

export const GET_FULL_BLACKLIST = 'blacklist:getAll';

const URL = '/blacklist';

export function getFullBlacklist(blacklist: User[]): CustomAction {
  return {
    type: GET_FULL_BLACKLIST,
    payload: {
      blacklist,
    },
  };
}

export function getFullBlacklistRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: URL,
      onSuccess: (blacklist: User[]) => dispatch(getFullBlacklist(blacklist)),
    });
}

export function addToBlacklistRequest(data: User): CustomThunkAction {
  return (): Promise<void> =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function deleteFromBlacklistRequest(id: number): CustomThunkAction {
  return (): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/${id}`,
    });
}
