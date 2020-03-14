import { deleteData, getData, postData, putData } from '../api';
import { DebtRequest } from '../types/response';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { DebtRequestPayload } from '../types/request';

export const GET_SENT_DEBT_REQUESTS = 'debt-requests:getAllSent';
export const GET_RECEIVED_DEBT_REQUESTS = 'debt-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_DEBT_REQUESTS =
  'debt-requests:countNewReceived';
export const ANSWER_ON_DEBT_REQUEST = 'debt-requests:answer';
export const DELETE_DEBT_REQUEST = 'debt-requests:delete';

const URL = '/debt-requests';

export function getSentDebtRequests(debtRequests: DebtRequest[]): CustomAction {
  return {
    type: GET_SENT_DEBT_REQUESTS,
    payload: {
      debtRequests,
    },
  };
}

export function getReceivedDebtRequests(
  debtRequests: DebtRequest[]
): CustomAction {
  return {
    type: GET_RECEIVED_DEBT_REQUESTS,
    payload: {
      debtRequests,
    },
  };
}

export function countNewReceivedDebtRequests(
  numberOfNewReceivedDebtRequests: number
): CustomAction {
  return {
    type: COUNT_NEW_RECEIVED_DEBT_REQUESTS,
    payload: {
      numberOfNewReceivedDebtRequests,
    },
  };
}

export function answerOnDebtRequest(): CustomAction {
  return {
    type: ANSWER_ON_DEBT_REQUEST,
  };
}

export function deleteDebtRequest(): CustomAction {
  return {
    type: DELETE_DEBT_REQUEST,
  };
}

export function getSentDebtRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/sent`,
      onSuccess: (debtRequests: DebtRequest[]) =>
        dispatch(getSentDebtRequests(debtRequests)),
    });
}

export function getReceivedDebtRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/received`,
      onSuccess: (debtRequests: DebtRequest[]) =>
        dispatch(getReceivedDebtRequests(debtRequests)),
    });
}

export function sendDebtRequestRequest(
  data: DebtRequestPayload
): CustomThunkAction {
  return (): Promise<void> =>
    postData({
      resourcePath: URL,
      data,
    });
}

export function acceptDebtRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: `${URL}/${id}/accept`,
      onSuccess: () => dispatch(answerOnDebtRequest()),
    });
}

export function rejectDebtRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: `${URL}/${id}/reject`,
      onSuccess: () => dispatch(answerOnDebtRequest()),
    });
}

export function deleteSentDebtRequestRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/sent/${id}`,
      onSuccess: () => dispatch(deleteDebtRequest()),
    });
}

export function countNewReceivedDebtRequestsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/received/new/count`,
      onSuccess: (number: number) =>
        dispatch(countNewReceivedDebtRequests(number)),
    });
}
