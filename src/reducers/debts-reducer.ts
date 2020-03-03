import { GET_DEBTS } from '../actions/debts-actions';
import { CustomAction, DebtState } from '../types/redux';

export function debtsReducer(
  state: DebtState = [],
  { type, payload }: CustomAction
): DebtState {
  switch (type) {
    case GET_DEBTS:
      return payload.debts;
    default:
      return state;
  }
}
