// @flow

import { GET_FULL_BLACKLIST } from '../actions/blacklist-actions';
import type { Action, BlacklistState } from '../types/redux';

export function blacklistReducer(
  state: BlacklistState = [],
  { type, payload = {} }: Action
): BlacklistState {
  switch (type) {
    case GET_FULL_BLACKLIST:
      return payload.blacklist;
    default:
      return state;
  }
}
