import {
  ANSWER_ON_DEBT_REQUEST,
  COUNT_NEW_RECEIVED_DEBT_REQUESTS,
  DELETE_DEBT_REQUEST,
  GET_RECEIVED_DEBT_REQUESTS,
  GET_SENT_DEBT_REQUESTS,
} from '../actions/debt-requests-actions';
import { CustomAction, DebtRequestState } from '../types/redux';

const initialState: DebtRequestState = {
  sent: [],
  received: [],
  number: 0,
  isNeededToUpdateList: false,
};

export function debtRequestsReducer(
  state = initialState,
  { type, payload }: CustomAction
): DebtRequestState {
  switch (type) {
    case GET_SENT_DEBT_REQUESTS:
      return {
        ...state,
        sent: payload.debtRequests,
        isNeededToUpdateList: false,
      };
    case GET_RECEIVED_DEBT_REQUESTS:
      return {
        ...state,
        received: payload.debtRequests,
        isNeededToUpdateList: false,
      };
    case COUNT_NEW_RECEIVED_DEBT_REQUESTS:
      return {
        ...state,
        number: payload.numberOfNewReceivedDebtRequests,
      };
    case ANSWER_ON_DEBT_REQUEST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    case DELETE_DEBT_REQUEST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    default:
      return state;
  }
}
