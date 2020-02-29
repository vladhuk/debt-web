// @flow

import { deleteData, getData, postData, updateData } from '../api';
import type { Action, ThunkAction } from '../types/redux';
import type { Group, User } from '../types/model';

export const GET_GROUPS = 'groups:getAll';
export const GET_GROUP = 'groups:get';
export const GET_GROUP_MEMBERS = 'gruoups:getMembers';
export const CREATE_GROUP = 'groups:create';
export const DELETE_GROUP = 'groups:delete';
export const UPDATE_GROUP = 'groups:update';

const URL = '/groups';

export function getGroups(groups: Group[]): Action {
  return {
    type: GET_GROUPS,
    payload: {
      groups,
    },
  };
}

export function getGroup(group: Group): Action {
  return {
    type: GET_GROUP,
    payload: {
      group,
    },
  };
}

export function getGroupMembers(members: User[]): Action {
  return {
    type: GET_GROUP_MEMBERS,
    payload: {
      members,
    },
  };
}

export function createGroup(): Action {
  return {
    type: CREATE_GROUP,
  };
}

export function deleteGroup(): Action {
  return {
    type: DELETE_GROUP,
  };
}

export function updateGroup(): Action {
  return {
    type: UPDATE_GROUP,
  };
}

export function getGroupsRequest(): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: URL,
      onSuccess: groups => dispatch(getGroups(groups)),
    });
}

export function getGroupRequest(id: number): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/${id}`,
      onSuccess: group => dispatch(getGroup(group)),
    });
}

export function getGroupMembersRequest(groupId: number): ThunkAction {
  return dispatch =>
    getData({
      resourcePath: `${URL}/${groupId}`,
      onSuccess: members => dispatch(getGroupMembers(members)),
    });
}

export function createGroupRequest(group: Group): ThunkAction {
  return dispatch =>
    postData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(createGroup()),
    });
}

export function updateGroupRequest(group: Group): ThunkAction {
  return dispatch =>
    updateData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(updateGroup()),
    });
}

export function deleteGroupRequest(id: number): ThunkAction {
  return dispatch =>
    deleteData({
      resourcePath: `${URL}/${id}`,
      onSuccess: () => dispatch(deleteGroup()),
    });
}

export function deleteGroupMember(
  groupId: number,
  memberId: number
): ThunkAction {
  return () =>
    deleteData({
      resourcePath: `${URL}/${groupId}/members/${memberId}`,
    });
}
