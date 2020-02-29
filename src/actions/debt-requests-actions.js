// @flow

import { deleteData, getData, postData, putData } from '../api';
import type { Action, ThunkAction } from '../types/redux';
import type { DebtRequest } from '../types/model';

export const GET_SENT_DEBT_REQUESTS = 'debt-requests:getAllSent';
export const GET_RECEIVED_DEBT_REQUESTS = 'debt-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_DEBT_REQUESTS =
  'debt-requests:countNewReceived';
export const ANSWER_ON_DEBT_REQUEST = 'debt-requests:answer';
export const DELETE_DEBT_REQUEST = 'debt-requests:delete';

const URL = '/debt-requests';

export function getSentDebtRequests(debtRequests: DebtRequest[]): Action {
  return {
    type: GET_SENT_DEBT_REQUESTS,
    payload: {
      debtRequests,
    },
  };
}

export function getReceivedDebtRequests(debtRequests: DebtRequest[]): Action {
  return {
    type: GET_RECEIVED_DEBT_REQUESTS,
    payload: {
      debtRequests,
    },
  };
}

export function countNewReceivedDebtRequests(
  numberOfNewReceivedDebtRequests: number
): Action {
  return {
    type: COUNT_NEW_RECEIVED_DEBT_REQUESTS,
    payload: {
      numberOfNewReceivedDebtRequests,
    },
  };
}

export function answerOnDebtRequest(): Action {
  return {
    type: ANSWER_ON_DEBT_REQUEST,
  };
}

export function deleteDebtRequest(): Action {
  return {
    type: DELETE_DEBT_REQUEST,
  };
}

export function getSentDebtRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/sent`,
      onSuccess: debtRequests => dispatch(getSentDebtRequests(debtRequests)),
    });
}

export function getReceivedDebtRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/received`,
      onSuccess: debtRequests =>
        dispatch(getReceivedDebtRequests(debtRequests)),
    });
}

export function sendDebtRequestRequest(data: DebtRequest): ThunkAction {
  return () =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function acceptDebtRequestRequest(id: number): ThunkAction {
  return dispatch =>
    putData({
      resourcePath: `${URL}/${id}/accept`,
      onSuccess: () => dispatch(answerOnDebtRequest()),
    });
}

export function rejectDebtRequestRequest(id: number): ThunkAction {
  return dispatch =>
    putData({
      resourcePath: `${URL}/${id}/reject`,
      onSuccess: () => dispatch(answerOnDebtRequest()),
    });
}

export function deleteSentDebtRequestRequest(id: number): ThunkAction {
  return dispatch =>
    deleteData({
      resourcePath: `${URL}/sent/${id}`,
      onSuccess: () => dispatch(deleteDebtRequest()),
    });
}

export function countNewReceivedDebtRequestsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/received/new/count`,
      onSuccess: number => dispatch(countNewReceivedDebtRequests(number)),
    });
}
