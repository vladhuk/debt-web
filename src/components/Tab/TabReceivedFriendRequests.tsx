import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  acceptFriendRequestRequest,
  countNewReceivedFriendRequestsRequest,
  getReceivedFriendRequestsRequest,
  rejectFriendRequestRequest,
} from '../../actions/friend-requests-actions';
import { Title } from '../Title';
import { CardReceivedFriendRequest } from '../Card';
import { PageContainer } from '../Container';
import { FriendRequest } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  receivedFriendRequests: FriendRequest[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  countFriendRequestsNotifications(): void;
  getReceivedFriendRequests(): void;
  acceptFriendRequest(id: number): void;
  rejectFriendRequest(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabReceivedFriendRequests(props: Props): JSX.Element {
  const { isNeededToUpdateList, receivedFriendRequests } = props;

  useEffect(() => {
    props.getReceivedFriendRequests();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getReceivedFriendRequests();
    }
  }, [isNeededToUpdateList]);

  useEffect(() => {
    if (receivedFriendRequests.length) {
      props.countFriendRequestsNotifications();
    }
  }, [receivedFriendRequests]);

  return (
    <PageContainer>
      <Title title="Received requests" />

      {receivedFriendRequests.map(request => (
        <CardReceivedFriendRequest
          key={request.id}
          user={request.sender}
          comment={request.comment}
          status={request.status.name}
          date={request.createdAt}
          onAccept={(): void => props.acceptFriendRequest(request.id)}
          onReject={(): void => props.rejectFriendRequest(request.id)}
        />
      ))}
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  receivedFriendRequests: state.friendRequests.received,
  isNeededToUpdateList: state.friendRequests.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      countFriendRequestsNotifications: countNewReceivedFriendRequestsRequest,
      getReceivedFriendRequests: getReceivedFriendRequestsRequest,
      acceptFriendRequest: acceptFriendRequestRequest,
      rejectFriendRequest: rejectFriendRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabReceivedFriendRequests);

export { connectedComponent as TabReceivedFriendRequests };
