import {getData} from "../api";

export const GET_DEBTS = 'debts:getAll';

const URL = '/debts';

function getDebts(debts) {
    return {
        type: GET_DEBTS,
        payload: {
            debts: debts
        }
    }
}

export function getDebtsRequest() {
    return dispatch => getData({
        resourcePath: URL,
        onSuccess: debts => dispatch(getDebts(debts))
    });
}