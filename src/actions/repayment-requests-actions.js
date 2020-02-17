import {deleteData, getData, postData} from '../api';

export const GET_SENT_REPAYMENT_REQUESTS = 'repayment-requests:getAllSent';
export const GET_RECEIVED_REPAYMENT_REQUESTS =
  'repayment-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS =
  'repayment-requests:countNewReceived';
export const ANSWER_ON_REPAYMENT_REQUEST = 'repayment-request:answer';
export const DELETE_REPAYMENT_REQUEST = 'repayment-requests:delete';

const URL = '/repayment-requests';

export function getSentRepaymentRequests(repaymentRequests) {
  return {
    type: GET_SENT_REPAYMENT_REQUESTS,
    payload: {
      repaymentRequests: repaymentRequests,
    },
  };
}

export function getReceivedRepaymentRequests(repaymentRequests) {
  return {
    type: GET_RECEIVED_REPAYMENT_REQUESTS,
    payload: {
      repaymentRequests: repaymentRequests,
    },
  };
}

export function countNewReceivedRepaymentRequests(
  numberOfNewReceivedRepaymentRequests
) {
  return {
    type: COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
    payload: {
      numberOfNewReceivedRepaymentRequests: numberOfNewReceivedRepaymentRequests,
    },
  };
}

export function answerOnRepaymentRequest() {
  return {
    type: ANSWER_ON_REPAYMENT_REQUEST,
  };
}

export function deleteRepaymentRequest() {
  return {
    type: DELETE_REPAYMENT_REQUEST,
  };
}

export function getSentRepaymentRequestsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/sent',
      onSuccess: repaymentRequests =>
        dispatch(getSentRepaymentRequests(repaymentRequests)),
    });
}

export function getReceivedRepaymentRequestsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/received',
      onSuccess: repaymentRequests =>
        dispatch(getReceivedRepaymentRequests(repaymentRequests)),
    });
}

export function sendRepaymentRequestRequest(data) {
  return dispatch =>
    postData({
      resourcePath: URL,
      data: data,
    });
}

export function acceptRepaymentRequestRequest(id) {
  return dispatch =>
    postData({
      resourcePath: URL + `/${id}/accept`,
      onSuccess: () => dispatch(answerOnRepaymentRequest()),
    });
}

export function rejectRepaymentRequestRequest(id) {
  return dispatch =>
    postData({
      resourcePath: URL + `/${id}/reject`,
      onSuccess: () => dispatch(answerOnRepaymentRequest()),
    });
}

export function deleteSentRepaymentRequestRequest(id) {
  return dispatch =>
    deleteData({
      resourcePath: URL + `/sent/${id}`,
      onSuccess: () => dispatch(deleteRepaymentRequest()),
    });
}

export function countNewReceivedRepaymentRequestsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL + '/received/new/count',
      onSuccess: number => dispatch(countNewReceivedRepaymentRequests(number)),
    });
}
