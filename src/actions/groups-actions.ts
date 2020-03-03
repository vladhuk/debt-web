import { deleteData, getData, postData, putData } from '../api';
import { CustomAction, CustomThunkAction } from '../types/redux';
import { Group, User } from '../types/model';

export const GET_GROUPS = 'groups:getAll';
export const GET_GROUP = 'groups:get';
export const GET_GROUP_MEMBERS = 'gruoups:getMembers';
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

export function getGroup(group: Group): CustomAction {
  return {
    type: GET_GROUP,
    payload: {
      group,
    },
  };
}

export function getGroupMembers(members: User[]): CustomAction {
  return {
    type: GET_GROUP_MEMBERS,
    payload: {
      members,
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

export function getGroupRequest(id: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/${id}`,
      onSuccess: (group: Group) => dispatch(getGroup(group)),
    });
}

export function getGroupMembersRequest(groupId: number): CustomThunkAction {
  return (dispatch): Promise<void> =>
    getData({
      resourcePath: `${URL}/${groupId}`,
      onSuccess: (members: User[]) => dispatch(getGroupMembers(members)),
    });
}

export function createGroupRequest(group: Group): CustomThunkAction {
  return (dispatch): Promise<void> =>
    postData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(createGroup()),
    });
}

export function updateGroupRequest(group: Group): CustomThunkAction {
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

export function deleteGroupMember(
  groupId: number,
  memberId: number
): CustomThunkAction {
  return (): Promise<void> =>
    deleteData({
      resourcePath: `${URL}/${groupId}/members/${memberId}`,
    });
}
