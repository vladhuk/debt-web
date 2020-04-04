import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  deleteSentFriendRequestRequest,
  getSentFriendRequestsRequest,
} from '../../actions/friend-requests-actions';
import { Title } from '../Title';
import { CardSentFriendRequest } from '../Card';
import { PageContainer } from '../Container';
import { ModalConfirmDelete } from '../Modal';
import { FriendRequest } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  sentFriendRequests: FriendRequest[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  getSentFriendRequests(): void;
  deleteSentRequest(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabSentFriendRequests(props: Props): JSX.Element {
  const { isNeededToUpdateList, sentFriendRequests } = props;

  const [deleteRequestModalShow, setDeleteRequestModalShow] = React.useState(
    false
  );
  const [requestIdForDelete, setRequestIdForDelete] = React.useState(-1);

  useEffect(() => {
    props.getSentFriendRequests();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getSentFriendRequests();
    }
  }, [isNeededToUpdateList]);

  const deleteRequest = (id: number): void => {
    props.deleteSentRequest(id);
    setDeleteRequestModalShow(false);
  };

  return (
    <PageContainer>
      <Title title="Sent requests" />

      {sentFriendRequests.map(request => (
        <CardSentFriendRequest
          key={request.id}
          user={request.receiver}
          comment={request.comment}
          status={request.status.name}
          date={request.createdAt}
          onDelete={(): void => {
            setDeleteRequestModalShow(true);
            setRequestIdForDelete(request.id);
          }}
        />
      ))}

      <ModalConfirmDelete
        show={deleteRequestModalShow}
        onHide={(): void => setDeleteRequestModalShow(false)}
        onDelete={(): void => deleteRequest(requestIdForDelete)}
      >
        Do you want to delete friend request?
      </ModalConfirmDelete>
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  sentFriendRequests: state.friendRequests.sent,
  isNeededToUpdateList: state.friendRequests.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getSentFriendRequests: getSentFriendRequestsRequest,
      deleteSentRequest: deleteSentFriendRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabSentFriendRequests);

export { connectedComponent as TabSentFriendRequests };
