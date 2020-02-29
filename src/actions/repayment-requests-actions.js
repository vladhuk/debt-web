// @flow

import { deleteData, getData, postData } from '../api';
import type { Action, ThunkAction } from '../types/redux';
import type { RepaymentRequest } from '../types/model';

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
): Action {
  return {
    type: GET_SENT_REPAYMENT_REQUESTS,
    payload: {
      repaymentRequests,
    },
  };
}

export function getReceivedRepaymentRequests(
  repaymentRequests: RepaymentRequest[]
): Action {
  return {
    type: GET_RECEIVED_REPAYMENT_REQUESTS,
    payload: {
      repaymentRequests,
    },
  };
}

export function countNewReceivedRepaymentRequests(
  numberOfNewReceivedRepaymentRequests: number
): Action {
  return {
    type: COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
    payload: {
      numberOfNewReceivedRepaymentRequests,
    },
  };
}

export function answerOnRepaymentRequest(): Action {
  return {
    type: ANSWER_ON_REPAYMENT_REQUEST,
  };
}

export function deleteRepaymentRequest(): Action {
  return {
    type: DELETE_REPAYMENT_REQUEST,
  };
}

export function getSentRepaymentRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/sent`,
      onSuccess: repaymentRequests =>
        dispatch(getSentRepaymentRequests(repaymentRequests)),
    });
}

export function getReceivedRepaymentRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/received`,
      onSuccess: repaymentRequests =>
        dispatch(getReceivedRepaymentRequests(repaymentRequests)),
    });
}

export function sendRepaymentRequestRequest(
  data: RepaymentRequest
): ThunkAction {
  return () =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function acceptRepaymentRequestRequest(id: number): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: `${URL}/${id}/accept`,
      onSuccess: () => dispatch(answerOnRepaymentRequest()),
    });
}

export function rejectRepaymentRequestRequest(id: number): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: `${URL}/${id}/reject`,
      onSuccess: () => dispatch(answerOnRepaymentRequest()),
    });
}

export function deleteSentRepaymentRequestRequest(id: number): ThunkAction {
  return dispatch =>
    deleteData({
      resourcePath: `${URL}/sent/${id}`,
      onSuccess: () => dispatch(deleteRepaymentRequest()),
    });
}

export function countNewReceivedRepaymentRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/received/new/count`,
      onSuccess: number => dispatch(countNewReceivedRepaymentRequests(number)),
    });
}
