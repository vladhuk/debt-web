import {deleteData, getData} from "../api";

export const GET_ALL_FRIENDS = 'friends:getAll';
export const DELETE_FRIEND = 'friends:delete';

const URL = '/friends';

export function getAllFriends(friends) {
    return {
        type: GET_ALL_FRIENDS,
        payload: {
            friends: friends
        }
    }
}

export function deleteFriend() {
    return {
        type: DELETE_FRIEND,
    }
}

export function getAllFriendsRequest() {
    return dispatch => getData({
        resourcePath: URL,
        onSuccess: friends => dispatch(getAllFriends(friends))
    });
}

export function deleteFriendRequest(id) {
    return dispatch => deleteData({
        resourcePath: URL+ `/${id}`,
        onSuccess: () => dispatch(deleteFriend()),
    });
}