import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PageContainer} from '../Container';
import {TitleWithButton} from '../Title';
import {
  createGroupRequest,
  deleteGroupRequest,
  getGroupsRequest,
  updateGroupRequest,
} from '../../actions/groups-actions';
import {CardGroup} from '../Card';
import {ModalEditGroup} from '../Modal';

function PageGroups(props) {
  const [editGroupModalShow, setEditGroupModalShow] = useState(false);
  const [createGroupModalShow, setCreateGroupModalShow] = useState(false);
  const [groupForEditing, setGroupForEditing] = useState();

  useEffect(() => {
    props.getGroups();
  }, []);

  useEffect(() => {
    if (props.isNeededToUpdateList) {
      props.getGroups();
    }
  }, [props.isNeededToUpdateList]);

  const editGroup = group => {
    setGroupForEditing(group);
    setEditGroupModalShow(true);
  };

  return (
    <PageContainer>
      <TitleWithButton
        title="Groups"
        buttonTitle="Create group"
        onButtonClick={() => setCreateGroupModalShow(true)}
      >
        <ModalEditGroup
          show={createGroupModalShow}
          onHide={() => setCreateGroupModalShow(false)}
          onSubmit={props.createGroup}
        />
      </TitleWithButton>

      {props.groups.map(group => (
        <CardGroup
          key={group.id}
          title={group.title}
          onTitleClick={() => editGroup(group)}
          onClose={() => props.deleteGroup(group.id)}
        />
      ))}

      <ModalEditGroup
        show={editGroupModalShow}
        onHide={() => setEditGroupModalShow(false)}
        onSubmit={props.updateGroup}
        group={groupForEditing}
      />
    </PageContainer>
  );
}

const mapStateToProps = state => ({
  groups: state.groups.groups,
  isNeededToUpdateList: state.groups.isNeededToUpdateList,
});

const mapDispatchToProps = dispatch =>
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
