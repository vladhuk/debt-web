import {GET_FULL_BLACKLIST} from '../actions/blacklist-actions';

export function blacklistReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_FULL_BLACKLIST:
      return payload.blacklist;
    default:
      return state;
  }
}
