import {
  GET_CURRENT_USER,
  GET_USER_BY_ID,
  GET_USER_BY_USERNAME,
} from '../actions/users-actions';

const initialState = {
  currentUser: {},
  user: {},
};

export function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: payload.group,
      };
    case GET_USER_BY_USERNAME:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
}
