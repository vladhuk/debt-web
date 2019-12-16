import {GET_DEBTS} from "../actions/debts-actions";

export function debtsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_DEBTS:
            return payload.debts;
    }

    return state;
}