// @flow

import { deleteData, getData, postData } from '../api';
import type { User } from '../types/model';
import type { Action, ThunkAction } from '../types/redux';

export const GET_FULL_BLACKLIST = 'blacklist:getAll';

const URL = '/blacklist';

export function getFullBlacklist(blacklist: User[]): Action {
  return {
    type: GET_FULL_BLACKLIST,
    payload: {
      blacklist,
    },
  };
}

export function getFullBlacklistRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: URL,
      onSuccess: blacklist => dispatch(getFullBlacklist(blacklist)),
    });
}

export function addToBlacklistRequest(data: User): ThunkAction {
  return () =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function deleteFromBlacklistRequest(id: number): ThunkAction {
  return () =>
    deleteData({
      resourcePath: `${URL}/${id}`,
    });
}
