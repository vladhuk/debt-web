import {GET_ALL_FRIENDS} from "../actions/friends-actions";

export function friendsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_ALL_FRIENDS:
            return payload.friends;
        default:
            return state;
    }
}