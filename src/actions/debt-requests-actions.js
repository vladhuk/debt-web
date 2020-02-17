import {deleteData, getData, postData} from '../api';

export const GET_SENT_DEBT_REQUESTS = 'debt-requests:getAllSent';
export const GET_RECEIVED_DEBT_REQUESTS = 'debt-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_DEBT_REQUESTS =
  'debt-requests:countNewReceived';
export const ANSWER_ON_DEBT_REQUEST = 'debt-requests:answer';
export const DELETE_DEBT_REQUEST = 'debt-requests:delete';

const URL = '/debt-requests';

export function getSentDebtRequests(debtRequests) {
  return {
    type: GET_SENT_DEBT_REQUESTS,
    payload: {
      debtRequests: debtRequests,
    },
  };
}

export function getReceivedDebtRequests(debtRequests) {
  return {
    type: GET_RECEIVED_DEBT_REQUESTS,
    payload: {
      debtRequests: debtRequests,
    },
  };
}

export function countNewReceivedDebtRequests(numberOfNewReceivedDebtRequests) {
  return {
    type: COUNT_NEW_RECEIVED_DEBT_REQUESTS,
    payload: {
      numberOfNewReceivedDebtRequests: numberOfNewReceivedDebtRequests,
    },
  };
}

export function answerOnDebtRequest() {
  return {
    type: ANSWER_ON_DEBT_REQUEST,
  };
}

export function deleteDebtRequest() {
  return {
    type: DELETE_DEBT_REQUEST,
  };
}

export function getSentDebtRequestsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/sent',
      onSuccess: debtRequests => dispatch(getSentDebtRequests(debtRequests)),
    });
}

export function getReceivedDebtRequestsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/received',
      onSuccess: debtRequests =>
        dispatch(getReceivedDebtRequests(debtRequests)),
    });
}

export function sendDebtRequestRequest(data) {
  return dispatch =>
    postData({
      resourcePath: URL,
      data: data,
    });
}

export function acceptDebtRequestRequest(id) {
  return dispatch =>
    postData({
      resourcePath: URL + `/${id}/accept`,
      onSuccess: () => dispatch(answerOnDebtRequest()),
    });
}

export function rejectDebtRequestRequest(id) {
  return dispatch =>
    postData({
      resourcePath: URL + `/${id}/reject`,
      onSuccess: () => dispatch(answerOnDebtRequest()),
    });
}

export function deleteSentDebtRequestRequest(id) {
  return dispatch =>
    deleteData({
      resourcePath: URL + `/sent/${id}`,
      onSuccess: () => dispatch(deleteDebtRequest()),
    });
}

export function countNewReceivedDebtRequestsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/received/new/count',
      onSuccess: number => dispatch(countNewReceivedDebtRequests(number)),
    });
}
