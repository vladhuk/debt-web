import {get} from "../api";

export const GET_ALL_FRIENDS = 'friends:get';

export function getAllFriends(friends) {
    return {
        type: GET_ALL_FRIENDS,
        payload: {
            friends: friends
        }
    }
}

export function getAllFriendsRequest() {
    return dispatch => get({
        resourcePath: '/friends',
        onSuccess: friends => dispatch(getAllFriends(friends))
    });
}