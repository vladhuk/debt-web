import {
    COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
    GET_RECEIVED_FRIEND_REQUESTS,
    GET_SENT_FRIEND_REQUESTS
} from "../actions/friends-requests-actions";

export function friendRequestsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_SENT_FRIEND_REQUESTS:
            return payload.friendRequests;
        case GET_RECEIVED_FRIEND_REQUESTS:
            return payload.friendRequests;
        case COUNT_NEW_RECEIVED_FRIEND_REQUESTS:
            return payload.numberOfNewReceivedFriendRequests;
    }

    return state;
}