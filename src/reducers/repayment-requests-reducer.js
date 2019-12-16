import {
    COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS,
    GET_RECEIVED_REPAYMENT_REQUESTS,
    GET_SENT_REPAYMENT_REQUESTS
} from "../actions/repayment-requests-actions";

export function repaymentRequestsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_SENT_REPAYMENT_REQUESTS:
            return {
                sent: payload.repaymentRequests
            };
        case GET_RECEIVED_REPAYMENT_REQUESTS:
            return {
                received: payload.repaymentRequests
            };
        case COUNT_NEW_RECEIVED_REPAYMENT_REQUESTS:
            return {
                number: payload.numberOfNewReceivedRepaymentRequests
            };
    }

    return state;
}