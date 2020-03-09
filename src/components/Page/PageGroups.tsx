import React, { useEffect, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageContainer } from '../Container';
import { TitleWithButton } from '../Title';
import {
  createGroupRequest,
  deleteGroupRequest,
  getGroupsRequest,
  updateGroupRequest,
} from '../../actions/groups-actions';
import { CardGroup } from '../Card';
import { ModalEditGroup } from '../Modal';
import { Group } from '../../types/model';
import { State } from '../../types/redux';

interface StateProps {
  groups: Group[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  getGroups(): void;
  deleteGroup(id: number): void;
  updateGroup(group: Group): void;
  createGroup(group: Group): void;
}

type Props = StateProps & DispatchProps;

function PageGroups(props: Props): JSX.Element {
  const { groups, isNeededToUpdateList, createGroup, updateGroup } = props;

  const [editGroupModalShow, setEditGroupModalShow] = useState<boolean>(false);
  const [createGroupModalShow, setCreateGroupModalShow] = useState<boolean>(
    false
  );
  const [groupForEditing, setGroupForEditing] = useState<Group>();

  useEffect(() => {
    props.getGroups();
  }, []);

  useEffect(() => {
    if (props.isNeededToUpdateList) {
      props.getGroups();
    }
  }, [isNeededToUpdateList]);

  const editGroup = (group: Group): void => {
    setGroupForEditing(group);
    setEditGroupModalShow(true);
  };

  return (
    <PageContainer>
      <TitleWithButton
        title="Groups"
        buttonTitle="Create group"
        onButtonClick={(): void => setCreateGroupModalShow(true)}
      >
        <ModalEditGroup
          show={createGroupModalShow}
          onHide={(): void => setCreateGroupModalShow(false)}
          onSubmit={createGroup}
        />
      </TitleWithButton>

      {groups.map(group => (
        <CardGroup
          key={group.id}
          title={group.title}
          onTitleClick={(): void => editGroup(group)}
          onClose={(): void => props.deleteGroup(group.id || -1)}
        />
      ))}

      <ModalEditGroup
        show={editGroupModalShow}
        onHide={(): void => setEditGroupModalShow(false)}
        onSubmit={updateGroup}
        group={groupForEditing}
      />
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  groups: state.groups.groups,
  isNeededToUpdateList: state.groups.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getGroups: getGroupsRequest,
      deleteGroup: deleteGroupRequest,
      updateGroup: updateGroupRequest,
      createGroup: createGroupRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGroups);

export { connectedComponent as PageGroups };
