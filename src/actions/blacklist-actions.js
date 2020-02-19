import { deleteData, getData, postData } from '../api';

export const GET_FULL_BLACKLIST = 'blacklist:getAll';

const URL = '/blacklist';

export function getFullBlacklist(blacklist) {
  return {
    type: GET_FULL_BLACKLIST,
    payload: {
      blacklist: blacklist,
    },
  };
}

export function getFullBlacklistRequest() {
  return dispatch =>
    getData({
      resourcePath: URL,
      onSuccess: blacklist => dispatch(getFullBlacklist(blacklist)),
    });
}

export function addToBlaklistRequest(data) {
  return dispatch =>
    postData({
      resourcePath: URL,
      data: data,
    });
}

export function deleteFromBlaklistRequest(id) {
  return dispatch =>
    deleteData({
      resourcePath: URL + `/${id}`,
    });
}
