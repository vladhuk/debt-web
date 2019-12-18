import {deleteData, getData, postData} from "../api";

export const GET_SENT_FRIEND_REQUESTS = 'friend-requests:getAllSent';
export const GET_RECEIVED_FRIEND_REQUESTS = 'friend-requests:getAllReceived';
export const COUNT_NEW_RECEIVED_FRIEND_REQUESTS = 'friend-requests:countNewReceived';

const URL = '/friend-requests';

export function getSentFriendRequests(friendRequests) {
    return {
        type: GET_SENT_FRIEND_REQUESTS,
        payload: {
            friendRequests: friendRequests
        }
    }
}

export function getReceivedFriendRequests(friendRequests) {
    return {
        type: GET_RECEIVED_FRIEND_REQUESTS,
        payload: {
            friendRequests: friendRequests
        }
    }
}

export function countNewReceivedFriendRequests(numberOfNewReceivedFriendRequests) {
    return {
        type: COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
        payload: {
            numberOfNewReceivedFriendRequests: numberOfNewReceivedFriendRequests
        }
    }
}

export function getSentFriendRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/sent',
        onSuccess: friendRequests => dispatch(getSentFriendRequests(friendRequests))
    });
}

export function getReceivedFriendRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/received',
        onSuccess: friendRequests => dispatch(getReceivedFriendRequests(friendRequests))
    });
}

export function sendFriendRequestRequest(data) {
    return dispatch => postData({
        resourcePath: URL,
        data: data,
    });
}

export function acceptFriendRequestRequest(id) {
    return dispatch => postData({
        resourcePath: URL + `/${id}/accept`,
    });
}

export function rejectFriendRequestRequest(id) {
    return dispatch => postData({
        resourcePath: URL + `/${id}/reject`,
    });
}

export function deleteSentFriendRequestRequest(id) {
    return dispatch => deleteData({
        resourcePath: URL + `/sent/${id}`,
    });
}

export function countNewReceivedFriendRequestsRequest() {
    return dispatch => getData({
        resourcePath: URL + '/received/new/count',
        onSuccess: number => dispatch(countNewReceivedFriendRequests(number))
    });
}

