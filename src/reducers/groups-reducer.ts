import {
  CREATE_GROUP,
  DELETE_GROUP,
  GET_GROUP,
  GET_GROUP_MEMBERS,
  GET_GROUPS,
  UPDATE_GROUP,
} from '../actions/groups-actions';
import { CustomAction, GroupState } from '../types/redux';

const initialState: GroupState = {
  groups: [],
  group: null,
  members: [],
  isNeededToUpdateList: false,
};

export function groupsReducer(
  state = initialState,
  { type, payload }: CustomAction
): GroupState {
  switch (type) {
    case GET_GROUPS:
      return {
        ...state,
        groups: payload.groups,
        isNeededToUpdateList: false,
      };
    case GET_GROUP:
      return {
        ...state,
        group: payload.group,
      };
    case GET_GROUP_MEMBERS:
      return {
        ...state,
        members: payload.groupMembers,
      };
    case CREATE_GROUP:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    case DELETE_GROUP:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    case UPDATE_GROUP:
      return {
        ...state,
        isNeededToUpdateList: true,
      };
    default:
      return state;
  }
}
