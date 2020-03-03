import { deleteData, getData, postData, putData } from '../api';
import { RepaymentRequest } from '../types/model';
import { CustomAction, CustomThunkAction } from '../types/redux';

export const GET_SENT_REPAYMENT_REQUESTS = 'repayment-requests:getAllSent';
export const GET_RECEIVED_REPAYMENT_REQUESTS =
  'repayment-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS =
  'repayment-requests:countNewReceived';
export const ANSWER_ON_REPAYMENT_REQUEST = 'repayment-request:answer';
export const DELETE_REPAYMENT_REQUEST = 'repayment-requests:delete';

const URL = '/repayment-requests';

export function getSentRepaymentRequests(
  repaymentRequests: RepaymentRequest[]
): CustomAction {
  return {
    type: GET_SENT_REPAYMENT_REQUESTS,
    payload: {
      repaymentRequests,
    },
  };
}

export function getReceivedRepaymentRequests(
  repaymentRequests: RepaymentRequest[]
): CustomAction {
  return {
    type: GET_RECEIVED_REPAYMENT_REQUESTS,
    payload: {
      repaymentRequests,
    },
  };
}

export function countNewReceivedRepaymentRequests(
  numberOfNewReceivedRepaymentRequests: number
): CustomAction {
  return {
    type: COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
    payload: {
      numberOfNewReceivedRepaymentRequests,
    },
  };
}

export function answerOnRepaymentRequest(): CustomAction {
  return {
    type: ANSWER_ON_REPAYMENT_REQUEST,
  };
}

export function deleteRepaymentRequest(): CustomAction {
  return {
    type: DELETE_REPAYMENT_REQUEST,
  };
}

export function getSentRepaymentRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/sent`,
      onSuccess: (repaymentRequests: RepaymentRequest[]) =>
        dispatch(getSentRepaymentRequests(repaymentRequests)),
    });
}

export function getReceivedRepaymentRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/received`,
      onSuccess: (repaymentRequests: RepaymentRequest[]) =>
        dispatch(getReceivedRepaymentRequests(repaymentRequests)),
    });
}

export function sendRepaymentRequestRequest(
  data: RepaymentRequest
): CustomThunkAction {
  return (): Promise<void> =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function acceptRepaymentRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: `${URL}/${id}/accept`,
      onSuccess: () => dispatch(answerOnRepaymentRequest()),
    });
}

export function rejectRepaymentRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: `${URL}/${id}/reject`,
      onSuccess: () => dispatch(answerOnRepaymentRequest()),
    });
}

export function deleteSentRepaymentRequestRequest(
  id: number
): CustomThunkAction {
  return (dispatch): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/sent/${id}`,
      onSuccess: () => dispatch(deleteRepaymentRequest()),
    });
}

export function countNewReceivedRepaymentRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/received/new/count`,
      onSuccess: (number: number) =>
        dispatch(countNewReceivedRepaymentRequests(number)),
    });
}
