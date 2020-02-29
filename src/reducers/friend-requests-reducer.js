// @flow

import {
  ANSWER_ON_FRIEND_REQUEST,
  COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
  DELETE_FRIEND_REQUEST,
  GET_RECEIVED_FRIEND_REQUESTS,
  GET_SENT_FRIEND_REQUESTS,
} from '../actions/friend-requests-actions';
import type { Action, FriendRequestState } from '../types/redux';

const initialState: FriendRequestState = {
  sent: [],
  received: [],
  number: 0,
  isNeededToUpdateList: false,
};

export function friendRequestsReducer(
  state: FriendRequestState = initialState,
  { type, payload = {} }: Action
): FriendRequestState {
  switch (type) {
    case GET_SENT_FRIEND_REQUESTS:
      return {
        ...state,
        sent: payload.friendRequests,
        isNeededToUpdateList: false,
      };
    case GET_RECEIVED_FRIEND_REQUESTS:
      return {
        ...state,
        received: payload.friendRequests,
        isNeededToUpdateList: false,
      };
    case COUNT_NEW_RECEIVED_FRIEND_REQUESTS:
      return {
        ...state,
        number: payload.numberOfNewReceivedFriendRequests,
      };
    case ANSWER_ON_FRIEND_REQUEST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    case DELETE_FRIEND_REQUEST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    default:
      return state;
  }
}
