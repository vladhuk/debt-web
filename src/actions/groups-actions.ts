import { deleteData, getData, postData, putData } from '../api';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { Group } from '../types/response';
import { GroupPayload } from '../types/request';

export const GET_GROUPS = 'groups:getAll';
export const GET_GROUP = 'groups:get';
export const GET_GROUP_MEMBERS = 'groups:getMembers';
export const CREATE_GROUP = 'groups:create';
export const DELETE_GROUP = 'groups:delete';
export const UPDATE_GROUP = 'groups:update';

const URL = '/groups';

export function getGroups(groups: Group[]): CustomAction {
  return {
    type: GET_GROUPS,
    payload: {
      groups,
    },
  };
}

export function createGroup(): CustomAction {
  return {
    type: CREATE_GROUP,
  };
}

export function deleteGroup(): CustomAction {
  return {
    type: DELETE_GROUP,
  };
}

export function updateGroup(): CustomAction {
  return {
    type: UPDATE_GROUP,
  };
}

export function getGroupsRequest(): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: URL,
      onSuccess: (groups: Group[]) => dispatch(getGroups(groups)),
    });
}

export function createGroupRequest(group: GroupPayload): CustomThunkAction {
  return (dispatch): Promise<void> =>
    postData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(createGroup()),
    });
}

export function updateGroupRequest(group: GroupPayload): CustomThunkAction {
  return (dispatch): Promise<void> =>
    putData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(updateGroup()),
    });
}

export function deleteGroupRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/${id}`,
      onSuccess: () => dispatch(deleteGroup()),
    });
}
