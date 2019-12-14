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
    return dispatch => {
        fetch('http://localhost:8080/api/friends', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDg3IiwiaWF0IjoxNTc2MzU3OTExLCJleHAiOjE1NzY5NjI3MTF9.VOEFU9uvo-ln1wvhfgOYtMAu2O3ep7q_M1cJQnw42O8wfNJnXcwaDSn8Gea3iiH78cZ3b_eGeT8mafa0rOs9aw'
            }
        })
            .then(response => response.json())
            .then(friends => {
                dispatch(getAllFriends(friends))
            });
    }
}