import {
  ANSWER_ON_REPAYMENT_REQUEST,
  COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
  DELETE_REPAYMENT_REQUEST,
  GET_RECEIVED_REPAYMENT_REQUESTS,
  GET_SENT_REPAYMENT_REQUESTS,
} from '../actions/repayment-requests-actions';
import { CustomAction, RepaymentRequestState } from '../types/redux';

const initialState: RepaymentRequestState = {
  sent: [],
  received: [],
  number: 0,
  isNeededToUpdateList: false,
};

export function repaymentRequestsReducer(
  state: RepaymentRequestState = initialState,
  { type, payload }: CustomAction
): RepaymentRequestState {
  switch (type) {
    case GET_SENT_REPAYMENT_REQUESTS:
      return {
        ...state,
        sent: payload.repaymentRequests,
        isNeededToUpdateList: false,
      };
    case GET_RECEIVED_REPAYMENT_REQUESTS:
      return {
        ...state,
        received: payload.repaymentRequests,
        isNeededToUpdateList: false,
      };
    case COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS:
      return {
        ...state,
        number: payload.numberOfNewReceivedRepaymentRequests,
      };
    case ANSWER_ON_REPAYMENT_REQUEST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    case DELETE_REPAYMENT_REQUEST:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    default:
      return state;
  }
}
