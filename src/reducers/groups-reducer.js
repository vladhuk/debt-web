import {GET_GROUP, GET_GROUP_MEMBERS, GET_GROUPS} from "../actions/groups-actions";

const initialState = {
    groups: [],
    group: {},
    members: [],
};

export function groupsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_GROUPS:
            return {
                ...state,
                groups: payload.groups
            };
        case GET_GROUP:
            return {
                ...state,
                group: payload.group
            };
        case GET_GROUP_MEMBERS:
            return {
                ...state,
                members: payload.groupMembers
            };
    }

    return state;
}