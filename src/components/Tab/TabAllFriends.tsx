import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TitleWithButton } from '../Title';
import { ModalAddFriend, ModalConfirmDelete } from '../Modal';
import { CardUser } from '../Card';
import {
  deleteFriendRequest,
  getAllFriendsRequest,
} from '../../actions/friends-actions';
import { PageContainer } from '../Container';
import { User } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  friends: User[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  getAllFriends(): void;
  deleteFriend(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabAllFriends(props: Props): JSX.Element {
  const { friends, isNeededToUpdateList } = props;

  const [addFriendModalShow, setAddFriendModalShow] = React.useState(false);
  const [deleteFriendModalShow, setDeleteFriendModalShow] = React.useState(
    false
  );
  const [userIdForDelete, setUserIdForDelete] = React.useState(-1);

  useEffect(() => {
    props.getAllFriends();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getAllFriends();
    }
  }, [isNeededToUpdateList]);

  const deleteUser = (id: number): void => {
    props.deleteFriend(id);
    setDeleteFriendModalShow(false);
  };

  return (
    <PageContainer>
      <TitleWithButton
        title="Friends"
        buttonTitle="Add friend"
        onButtonClick={(): void => setAddFriendModalShow(true)}
      >
        <ModalAddFriend
          show={addFriendModalShow}
          onHide={(): void => setAddFriendModalShow(false)}
        />
      </TitleWithButton>

      {friends.map(user => (
        <CardUser
          key={user.id}
          user={user}
          onClose={(): void => {
            setDeleteFriendModalShow(true);
            setUserIdForDelete(user.id);
          }}
        />
      ))}

      <ModalConfirmDelete
        show={deleteFriendModalShow}
        onHide={(): void => setDeleteFriendModalShow(false)}
        onDelete={(): void => deleteUser(userIdForDelete)}
      >
        Do you want to delete friend?
      </ModalConfirmDelete>
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  friends: state.friends.list,
  isNeededToUpdateList: state.friends.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getAllFriends: getAllFriendsRequest,
      deleteFriend: deleteFriendRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabAllFriends);

export { connectedComponent as TabAllFriends };
