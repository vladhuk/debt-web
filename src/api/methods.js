import {API_BASE_URL} from "../constants";
import {getToken} from "../util";

const jsonHeader = [ 'Content-Type', 'application/json' ];

function getBaseHeaders() {
    return new Headers({
        'Authorization': getToken()
    });
}

function withDefaultThen({customFetch, onSuccess, onError}) {
    return customFetch
        .then(response => response.json())
        .then(response => {
            if(response.error) {
                throw(response.error);
            }
            onSuccess && onSuccess(response)
        })
        .then(error => {
            onError && onError(error);
        })
}

export function getData({resourcePath, onSuccess, onError}) {
    return withDefaultThen({
        onSuccess,
        onError,
        customFetch: fetch(API_BASE_URL + resourcePath, {
            headers: getBaseHeaders()
        }),
    });
}

export function postData({resourcePath, data, onSuccess, onError}) {
    return withDefaultThen({
        onSuccess,
        onError,
        customFetch: fetch(API_BASE_URL + resourcePath, {
            method: 'POST',
            headers: getBaseHeaders().append(...jsonHeader),
            body: JSON.stringify(data)
        }),
    });
}

export function updateData({resourcePath, data, onSuccess, onError}) {
    return withDefaultThen({
        onSuccess,
        onError,
        customFetch: fetch(API_BASE_URL + resourcePath, {
            method: 'UPDATE',
            headers: getBaseHeaders().append(...jsonHeader),
            body: JSON.stringify(data)
        }),
    });
}

export function deleteData({resourcePath, onSuccess, onError}) {
    return withDefaultThen({
        onSuccess,
        onError,
        customFetch: fetch(API_BASE_URL + resourcePath, {
            method: 'DELETE',
            headers: getBaseHeaders()
        }),
    });
}