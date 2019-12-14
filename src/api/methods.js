import {API_BASE_URL} from "../constants";
import {getToken} from "../util";

const getBaseHeaders = () => new Headers({
    'Authorization': getToken()
});

function defaultThen({customFetch, onSuccess, onError}) {
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

export function get({resourcePath, onSuccess, onError}) {
    return defaultThen({
        onSuccess,
        onError,
        customFetch: fetch(API_BASE_URL + resourcePath, {
            headers: getBaseHeaders()
        }),
    });
}