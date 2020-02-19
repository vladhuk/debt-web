import { deleteData, getData, postData, updateData } from '../api';

export const GET_GROUPS = 'groups:getAll';
export const GET_GROUP = 'groups:get';
export const GET_GROUP_MEMBERS = 'gruoups:getMembers';
export const CREATE_GROUP = 'groups:create';
export const DELETE_GROUP = 'groups:delete';
export const UPDATE_GROUP = 'groups:update';

const URL = '/groups';

export function getGroups(groups) {
  return {
    type: GET_GROUPS,
    payload: {
      groups: groups,
    },
  };
}

export function getGroup(group) {
  return {
    type: GET_GROUP,
    payload: {
      group: group,
    },
  };
}

export function getGroupMembers(members) {
  return {
    type: GET_GROUP_MEMBERS,
    payload: {
      members: members,
    },
  };
}

export function createGroup() {
  return {
    type: CREATE_GROUP,
  };
}

export function deleteGroup() {
  return {
    type: DELETE_GROUP,
  };
}

export function updateGroup() {
  return {
    type: UPDATE_GROUP,
  };
}

export function getGroupsRequest() {
  return dispatch =>
    getData({
      resourcePath: URL,
      onSuccess: groups => dispatch(getGroups(groups)),
    });
}

export function getGroupRequest(id) {
  return dispatch =>
    getData({
      resourcePath: URL + `/${id}`,
      onSuccess: group => dispatch(getGroup(group)),
    });
}

export function getGroupMembersRequest(groupId) {
  return dispatch =>
    getData({
      resourcePath: URL + `/${groupId}`,
      onSuccess: members => dispatch(getGroupMembers(members)),
    });
}

export function createGroupRequest(group) {
  return dispatch =>
    postData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(createGroup()),
    });
}

export function updateGroupRequest(group) {
  return dispatch =>
    updateData({
      resourcePath: URL,
      data: group,
      onSuccess: () => dispatch(updateGroup()),
    });
}

export function deleteGroupRequest(id) {
  return dispatch =>
    deleteData({
      resourcePath: URL + `/${id}`,
      onSuccess: () => dispatch(deleteGroup()),
    });
}

export function deleteGroupMember(groupId, memberId) {
  return dispatch =>
    deleteData({
      resourcePath: URL + `/${groupId}/members/${memberId}`,
    });
}
