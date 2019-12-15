import {SIGN_IN, SIGN_UP} from "../actions/auth-actions";

export function accessTokenReducer(state = [], {type, payload}) {
    switch (type) {
        case SIGN_IN:
            return payload.accessToken;
        case SIGN_UP:
            return payload.accessToken;
    }

    return state;
}