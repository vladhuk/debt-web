import {deleteData, getData} from "../api";

export const GET_ALL_FRIENDS = 'friends:getAll';

export function getAllFriends(friends) {
    return {
        type: GET_ALL_FRIENDS,
        payload: {
            friends: friends
        }
    }
}

export function getAllFriendsRequest() {
    return dispatch => getData({
        resourcePath: '/friends',
        onSuccess: friends => dispatch(getAllFriends(friends))
    });
}

export function deleteFriendRequest(id) {
    return dispatch => deleteData({
        resourcePath: `/friends/${id}`,
    });
}