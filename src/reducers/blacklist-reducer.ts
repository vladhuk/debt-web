import { GET_FULL_BLACKLIST } from '../actions/blacklist-actions';
import { BlacklistState, CustomAction } from '../types/redux';

export function blacklistReducer(
  state: BlacklistState = [],
  { type, payload }: CustomAction
): BlacklistState {
  switch (type) {
    case GET_FULL_BLACKLIST:
      return payload.blacklist;
    default:
      return state;
  }
}
