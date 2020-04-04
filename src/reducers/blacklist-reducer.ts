import {
  ADD_TO_BLACKLIST,
  DELETE_FROM_BLACKLIST,
  GET_FULL_BLACKLIST,
} from '../actions/blacklist-actions';
import { BlacklistState, CustomAction } from '../types/redux';

const initialState: BlacklistState = {
  list: [],
  isNeededToUpdateList: false,
};

export function blacklistReducer(
  state = initialState,
  { type, payload }: CustomAction
): BlacklistState {
  switch (type) {
    case GET_FULL_BLACKLIST:
      return {
        ...state,
        list: payload.blacklist,
        isNeededToUpdateList: false,
      };
    case ADD_TO_BLACKLIST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    case DELETE_FROM_BLACKLIST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    default:
      return state;
  }
}
