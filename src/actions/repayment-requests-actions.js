import {deleteData, getData, postData} from "../api";

export const GET_SENT_REPAYMENT_REQUESTS = 'repayment-requests:getAllSent';
export const GET_RECEIVED_REPAYMENT_REQUESTS = 'repayment-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS = 'repayment-requests:countNewReceived';

const URL = '/repayment-requests';

export function getSentRepaymentRequests(friendRequests) {
    return {
        type: GET_SENT_REPAYMENT_REQUESTS,
        payload: {
            friendRequests: friendRequests
        }
    }
}

export function getReceivedRepaymentRequests(friendRequests) {
    return {
        type: GET_RECEIVED_REPAYMENT_REQUESTS,
        payload: {
            friendRequests: friendRequests
        }
    }
}

export function countNewReceivedRepaymentRequests(numberOfNewReceivedFriendRequests) {
    return {
        type: COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
        payload: {
            numberOfNewReceivedFriendRequests: numberOfNewReceivedFriendRequests
        }
    }
}

export function getSentRepaymentRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/sent',
        onSuccess: repaymentRequests => dispatch(getSentRepaymentRequests(repaymentRequests))
    });
}

export function getReceivedRepaymentRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/received',
        onSuccess: repaymentRequests => dispatch(getReceivedRepaymentRequests(repaymentRequests))
    });
}

export function sendRepaymentRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL,
        data: data,
    });
}

export function acceptRepaymentRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL + '/accept',
        data: data,
    });
}

export function rejectRepaymentRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL + '/reject',
        data: data,
    });
}

export function deleteSentRepaymentRequestRequest(id) {
    return dispatch => deleteData({
        resourcePath: URL + `/sent/${id}`,
    });
}

export function countNewReceivedRepaymentRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/received/new/count',
        onSuccess: number => dispatch(countNewReceivedRepaymentRequests(number))
    });
}

