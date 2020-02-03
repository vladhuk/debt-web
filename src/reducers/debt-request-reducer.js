import {
    COUNT_NEW_RECEIVED_DEBT_REQUESTS,
    GET_RECEIVED_DEBT_REQUESTS,
    GET_SENT_DEBT_REQUESTS
} from "../actions/debt-requests-actions";

const initialState = {
    sent: [],
    received: [],
    number: [],
};

export function debtRequestsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_SENT_DEBT_REQUESTS:
            return {
                ...state,
                sent: payload.debtRequests
            };
        case GET_RECEIVED_DEBT_REQUESTS:
            return {
                ...state,
                received: payload.debtRequests
            };
        case COUNT_NEW_RECEIVED_DEBT_REQUESTS:
            return {
                ...state,
                number: payload.numberOfNewReceivedDebtRequests
            };
        default:
            return state;
    }
}