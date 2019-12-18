import {
    COUNT_NEW_RECEIVED_FRIEND_REQUESTS,
    GET_RECEIVED_FRIEND_REQUESTS,
    GET_SENT_FRIEND_REQUESTS
} from "../actions/friend-requests-actions";

const initialState = {
    sent: [],
    received: [],
    number: [],
};

export function friendRequestsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_SENT_FRIEND_REQUESTS:
            return {
                ...state,
                sent: payload.friendRequests
            };
        case GET_RECEIVED_FRIEND_REQUESTS:
            return {
                ...state,
                received: payload.friendRequests
            };
        case COUNT_NEW_RECEIVED_FRIEND_REQUESTS:
            return {
                ...state,
                number: payload.numberOfNewReceivedFriendRequests
            };
    }

    return state;
}