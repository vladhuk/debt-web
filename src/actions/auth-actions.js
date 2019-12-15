import {postData} from "../api";

export const SIGN_IN = 'auth:signIn';
export const SIGN_UP = 'auth:signUp';

export function signIn({accessToken, tokenType}) {
    return {
        type: SIGN_IN,
        payload: {
            accessToken: tokenType + ' ' + accessToken
        }
    }
}

export function signUp({accessToken, tokenType}) {
    return {
        type: SIGN_UP,
        payload: {
            accessToken: tokenType + ' ' + accessToken
        }
    }
}

export function signInRequest(data) {
    return dispatch => postData({
        resourcePath: '/auth/signin',
        data: data,
        onSuccess: payload => dispatch(signIn(payload))
    });
}

export function signUpRequest(data) {
    return dispatch => postData({
        resourcePath: '/auth/signup',
        data: data,
        onSuccess: payload => dispatch(signIn(payload))
    });
}