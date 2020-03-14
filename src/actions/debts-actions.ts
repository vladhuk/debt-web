import { getData } from '../api';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { Debt } from '../types/response';

export const GET_DEBTS = 'debts:getAll';

const URL = '/debts';

function getDebts(debts: Debt[]): CustomAction {
  return {
    type: GET_DEBTS,
    payload: {
      debts,
    },
  };
}

export function getDebtsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: URL,
      onSuccess: (debts: Debt[]) => dispatch(getDebts(debts)),
    });
}
