import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Title } from '../Title';
import { CardReceivedRepaymentRequest } from '../Card';
import { PageContainer } from '../Container';
import {
  acceptRepaymentRequestRequest,
  countNewReceivedRepaymentRequestsRequest,
  getReceivedRepaymentRequestsRequest,
  rejectRepaymentRequestRequest,
} from '../../actions/repayment-requests-actions';
import { RepaymentRequest } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  receivedRepaymentRequests: RepaymentRequest[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  countRepaymentRequestsNotifications(): void;
  getReceivedRepaymentRequests(): void;
  acceptRepaymentRequest(id: number): void;
  rejectRepaymentRequest(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabReceivedRepaymentRequests(props: Props): JSX.Element {
  const { isNeededToUpdateList, receivedRepaymentRequests } = props;

  useEffect(() => {
    props.getReceivedRepaymentRequests();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getReceivedRepaymentRequests();
    }
  }, [isNeededToUpdateList]);

  useEffect(() => {
    if (receivedRepaymentRequests.length) {
      props.countRepaymentRequestsNotifications();
    }
  }, [receivedRepaymentRequests]);

  return (
    <PageContainer>
      <Title title="Received repayment requests" />

      {receivedRepaymentRequests.map(request => (
        <CardReceivedRepaymentRequest
          key={request.id}
          request={request}
          onAccept={(): void => props.acceptRepaymentRequest(request.id)}
          onReject={(): void => props.rejectRepaymentRequest(request.id)}
        />
      ))}
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  receivedRepaymentRequests: state.repaymentRequests.received,
  isNeededToUpdateList: state.repaymentRequests.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      countRepaymentRequestsNotifications: countNewReceivedRepaymentRequestsRequest,
      getReceivedRepaymentRequests: getReceivedRepaymentRequestsRequest,
      acceptRepaymentRequest: acceptRepaymentRequestRequest,
      rejectRepaymentRequest: rejectRepaymentRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabReceivedRepaymentRequests);

export { connectedComponent as TabReceivedRepaymentRequests };
