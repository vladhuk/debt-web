import { DELETE_FRIEND, GET_ALL_FRIENDS } from '../actions/friends-actions';

const initialState = {
  list: [],
  isNeededToUpdateList: false,
};

export function friendsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_FRIENDS:
      return {
        ...state,
        list: payload.friends,
        isNeededToUpdateList: false,
      };
    case DELETE_FRIEND:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    default:
      return state;
  }
}
