import {
  ANSWER_ON_FRIEND_REQUEST,
  COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
  DELETE_FRIEND_REQUEST,
  GET_RECEIVED_FRIEND_REQUESTS,
  GET_SENT_FRIEND_REQUESTS,
} from '../actions/friend-requests-actions';

const initialState = {
  sent: [],
  received: [],
  number: [],
  isNeededToUpdateList: false,
};

export function friendRequestsReducer(state = initialState, { type, payload }) {
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
