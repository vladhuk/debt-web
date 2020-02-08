import {API_BASE_URL} from "../constants";
import {getToken} from "../util";

const jsonHeader = [ 'Content-Type', 'application/json' ];

function getBaseHeaders() {
    return new Headers({
        'Authorization': getToken()
    });
}

function withDefaultThen({customFetch, onRequest, onSuccess, onError}) {
    onRequest && onRequest();

    return customFetch
        .then(response => response.text())
        .then(text => text ? JSON.parse(text) : '{}')
        .then(response => {
            if(response.error) {
                throw(response.error);
            }
            onSuccess && onSuccess(response)
        })
        .catch(error => {
            onError && onError(error);
        })
}

export function getData({resourcePath, ...args}) {
    return withDefaultThen({
        customFetch: fetch(API_BASE_URL + resourcePath, {
            headers: getBaseHeaders()
        }),
        ...args,
    });
}

export function postData({resourcePath, data, ...args}) {
    const headers = getBaseHeaders();
    headers.append(...jsonHeader);

    return withDefaultThen({
        customFetch: fetch(API_BASE_URL + resourcePath, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }),
        ...args,
    });
}

export function updateData({resourcePath, data, ...args}) {
    const headers = getBaseHeaders();
    headers.append(...jsonHeader);

    return withDefaultThen({
        customFetch: fetch(API_BASE_URL + resourcePath, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        }),
        ...args,
    });
}

export function deleteData({resourcePath, ...args}) {
    return withDefaultThen({
        customFetch: fetch(API_BASE_URL + resourcePath, {
            method: 'DELETE',
            headers: getBaseHeaders()
        }),
        ...args,
    });
}