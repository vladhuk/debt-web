import {GET_GROUP, GET_GROUP_MEMBERS, GET_GROUPS} from "../actions/groups-actions";

export function groupsReducer(state = [], {type, payload}) {
    switch (type) {
        case GET_GROUPS:
            return {
                groups: payload.groups
            };
        case GET_GROUP:
            return {
                group: payload.group
            };
        case GET_GROUP_MEMBERS:
            return {
                members: payload.groupMembers
            };
    }

    return state;
}