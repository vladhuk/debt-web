import { deleteData, getData, postData, putData } from '../api';
import { FriendRequest } from '../types/response';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { FriendRequestPayload } from '../types/request';

export const GET_SENT_FRIEND_REQUESTS = 'friend-requests:getAllSent';
export const GET_RECEIVED_FRIEND_REQUESTS = 'friend-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_FRIEND_REQUESTS =
  'friend-requests:countNewReceived';
export const ANSWER_ON_FRIEND_REQUEST = 'friend-request:answer';
export const DELETE_FRIEND_REQUEST = 'friend-requests:delete';

const URL = '/friend-requests';

export function getSentFriendRequests(
  friendRequests: FriendRequest[]
): CustomAction {
  return {
    type: GET_SENT_FRIEND_REQUESTS,
    payload: {
      friendRequests,
    },
  };
}

export function getReceivedFriendRequests(
  friendRequests: FriendRequest[]
): CustomAction {
  return {
    type: GET_RECEIVED_FRIEND_REQUESTS,
    payload: {
      friendRequests,
    },
  };
}

export function countNewReceivedFriendRequests(
  numberOfNewReceivedFriendRequests: number
): CustomAction {
  return {
    type: COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
    payload: {
      numberOfNewReceivedFriendRequests,
    },
  };
}

export function answerOnFriendRequest(): CustomAction {
  return {
    type: ANSWER_ON_FRIEND_REQUEST,
  };
}

export function deleteFriendRequest(): CustomAction {
  return {
    type: DELETE_FRIEND_REQUEST,
  };
}

export function getSentFriendRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/sent`,
      onSuccess: (friendRequests: FriendRequest[]) =>
        dispatch(getSentFriendRequests(friendRequests)),
    });
}

export function getReceivedFriendRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/received`,
      onSuccess: (friendRequests: FriendRequest[]) =>
        dispatch(getReceivedFriendRequests(friendRequests)),
    });
}

export function sendFriendRequestRequest(
  data: FriendRequestPayload
): CustomThunkAction {
  return (): Promise<void> =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function acceptFriendRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: `${URL}/${id}/accept`,
      onSuccess: () => dispatch(answerOnFriendRequest()),
    });
}

export function rejectFriendRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: `${URL}/${id}/reject`,
      onSuccess: () => dispatch(answerOnFriendRequest()),
    });
}

export function deleteSentFriendRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/sent/${id}`,
      onSuccess: () => dispatch(deleteFriendRequest()),
    });
}

export function countNewReceivedFriendRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/received/new/count`,
      onSuccess: (number: number) =>
        dispatch(countNewReceivedFriendRequests(number)),
    });
}
