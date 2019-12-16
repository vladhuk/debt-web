import {
    COUNT_NEW_RECEIVED_DEBT_REQUESTS,
    GET_RECEIVED_DEBT_REQUESTS,
    GET_SENT_DEBT_REQUESTS
} from "../actions/debt-requests-actions";

export function debtRequestsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_SENT_DEBT_REQUESTS:
            return {
                sent: payload.debtRequests
            };
        case GET_RECEIVED_DEBT_REQUESTS:
            return {
                received: payload.debtRequests
            };
        case COUNT_NEW_RECEIVED_DEBT_REQUESTS:
            return {
                number: payload.numberOfNewReceivedDebtRequests
            };
    }

    return state;
}