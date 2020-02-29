// @flow

import { GET_DEBTS } from '../actions/debts-actions';
import type { Action, DebtState } from '../types/redux';

export function debtsReducer(
  state: DebtState = [],
  { type, payload = {} }: Action
): DebtState {
  switch (type) {
    case GET_DEBTS:
      return payload.debts;
    default:
      return state;
  }
}
