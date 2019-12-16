import {
    COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
    GET_RECEIVED_FRIEND_REQUESTS,
    GET_SENT_FRIEND_REQUESTS
} from "../actions/friends-requests-actions";

export function friendRequestsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_SENT_FRIEND_REQUESTS:
            return {
                sent: payload.friendRequests
            };
        case GET_RECEIVED_FRIEND_REQUESTS:
            return {
                received: payload.friendRequests
            };
        case COUNT_NEW_RECEIVED_FRIEND_REQUESTS:
            return {
                number: payload.numberOfNewReceivedFriendRequests
            };
    }

    return state;
}