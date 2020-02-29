// @flow

import { deleteData, getData, postData } from '../api';
import type { FriendRequest } from '../types/model';
import type { Action, ThunkAction } from '../types/redux';

export const GET_SENT_FRIEND_REQUESTS = 'friend-requests:getAllSent';
export const GET_RECEIVED_FRIEND_REQUESTS = 'friend-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_FRIEND_REQUESTS =
  'friend-requests:countNewReceived';
export const ANSWER_ON_FRIEND_REQUEST = 'friend-request:answer';
export const DELETE_FRIEND_REQUEST = 'friend-requests:delete';

const URL = '/friend-requests';

export function getSentFriendRequests(friendRequests: FriendRequest[]): Action {
  return {
    type: GET_SENT_FRIEND_REQUESTS,
    payload: {
      friendRequests,
    },
  };
}

export function getReceivedFriendRequests(
  friendRequests: FriendRequest[]
): Action {
  return {
    type: GET_RECEIVED_FRIEND_REQUESTS,
    payload: {
      friendRequests,
    },
  };
}

export function countNewReceivedFriendRequests(
  numberOfNewReceivedFriendRequests: number
): Action {
  return {
    type: COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
    payload: {
      numberOfNewReceivedFriendRequests,
    },
  };
}

export function answerOnFriendRequest(): Action {
  return {
    type: ANSWER_ON_FRIEND_REQUEST,
  };
}

export function deleteFriendRequest(): Action {
  return {
    type: DELETE_FRIEND_REQUEST,
  };
}

export function getSentFriendRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/sent`,
      onSuccess: friendRequests =>
        dispatch(getSentFriendRequests(friendRequests)),
    });
}

export function getReceivedFriendRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/received`,
      onSuccess: friendRequests =>
        dispatch(getReceivedFriendRequests(friendRequests)),
    });
}

export function sendFriendRequestRequest(data: FriendRequest): ThunkAction {
  return () =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function acceptFriendRequestRequest(id: number): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: `${URL}/${id}/accept`,
      onSuccess: () => dispatch(answerOnFriendRequest()),
    });
}

export function rejectFriendRequestRequest(id: number): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: `${URL}/${id}/reject`,
      onSuccess: () => dispatch(answerOnFriendRequest()),
    });
}

export function deleteSentFriendRequestRequest(id: number): ThunkAction {
  return dispatch =>
    deleteData({
      resourcePath: `${URL}/sent/${id}`,
      onSuccess: () => dispatch(deleteFriendRequest()),
    });
}

export function countNewReceivedFriendRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/received/new/count`,
      onSuccess: number => dispatch(countNewReceivedFriendRequests(number)),
    });
}
