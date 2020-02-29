// @flow

import { getData } from '../api';
import type { Debt } from '../types/payload';
import type { Action, ThunkAction } from '../types/redux';

export const GET_DEBTS = 'debts:getAll';

const URL = '/debts';

function getDebts(debts: Debt[]): Action {
  return {
    type: GET_DEBTS,
    payload: {
      debts,
    },
  };
}

export function getDebtsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: URL,
      onSuccess: debts => dispatch(getDebts(debts)),
    });
}
