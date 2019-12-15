import {getData} from "../api";

export const GET_FULL_BLACKLIST = 'blacklist:getAll';

export function getFullBlacklist(blacklist) {
    return {
        type: GET_FULL_BLACKLIST,
        payload: {
            blacklist: blacklist
        }
    }
}

export function getFullBlacklistRequest() {
    return dispatch => getData({
        resourcePath: '/blacklist',
        onSuccess: blacklist => dispatch(getFullBlacklist(blacklist))
    });
}