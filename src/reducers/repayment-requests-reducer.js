import {
    COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
    GET_RECEIVED_REPAYMENT_REQUESTS,
    GET_SENT_REPAYMENT_REQUESTS
} from "../actions/repayment-requests-actions";

const initialState = {
    sent: [],
    received: [],
    number: [],
};

export function repaymentRequestsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_SENT_REPAYMENT_REQUESTS:
            return {
                ...state,
                sent: payload.repaymentRequests
            };
        case GET_RECEIVED_REPAYMENT_REQUESTS:
            return {
                ...state,
                received: payload.repaymentRequests
            };
        case COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS:
            return {
                ...state,
                number: payload.numberOfNewReceivedRepaymentRequests
            };
        default:
            return state;
    }
}