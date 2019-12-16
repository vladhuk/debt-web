import {deleteData, getData, postData} from "../api";

export const GET_SENT_DEBT_REQUESTS = 'debt-requests:getAllSent';
export const GET_RECEIVED_DEBT_REQUESTS = 'debt-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_DEBT_REQUESTS = 'debt-requests:countNewReceived';

const URL = '/debt-requests';

export function getSentDebtRequests(friendRequests) {
    return {
        type: GET_SENT_DEBT_REQUESTS,
        payload: {
            friendRequests: friendRequests
        }
    }
}

export function getReceivedDebtRequests(friendRequests) {
    return {
        type: GET_RECEIVED_DEBT_REQUESTS,
        payload: {
            friendRequests: friendRequests
        }
    }
}

export function countNewReceivedDebtRequests(numberOfNewReceivedFriendRequests) {
    return {
        type: COUNT_NEW_RECEIVED_DEBT_REQUESTS,
        payload: {
            numberOfNewReceivedFriendRequests: numberOfNewReceivedFriendRequests
        }
    }
}

export function getSentDebtRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/sent',
        onSuccess: debtRequests => dispatch(getSentDebtRequests(debtRequests))
    });
}

export function getReceivedDebtRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/received',
        onSuccess: debtRequests => dispatch(getReceivedDebtRequests(debtRequests))
    });
}

export function sendDebtRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL,
        data: data,
    });
}

export function acceptDebtRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL + '/accept',
        data: data,
    });
}

export function rejectDebtRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL + '/reject',
        data: data,
    });
}

export function deleteSentDebtRequestRequest(id) {
    return dispatch => deleteData({
        resourcePath: URL + `/sent/${id}`,
    });
}

export function countNewReceivedDebtRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/received/new/count',
        onSuccess: number => dispatch(countNewReceivedDebtRequests(number))
    });
}

