import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Title } from '../Title';
import { CardReceivedDebtRequest } from '../Card';
import { PageContainer } from '../Container';
import {
  acceptDebtRequestRequest,
  countNewReceivedDebtRequestsRequest,
  getReceivedDebtRequestsRequest,
  rejectDebtRequestRequest,
} from '../../actions/debt-requests-actions';
import { DebtRequest } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  receivedDebtRequests: DebtRequest[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  countDebtRequestsNotifications(): void;
  getReceivedDebtRequests(): void;
  acceptDebtRequest(id: number): void;
  rejectDebtRequest(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabReceivedDebtRequests(props: Props): JSX.Element {
  const { isNeededToUpdateList, receivedDebtRequests } = props;

  useEffect(() => {
    props.getReceivedDebtRequests();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getReceivedDebtRequests();
    }
  }, [isNeededToUpdateList]);

  useEffect(() => {
    if (receivedDebtRequests.length) {
      props.countDebtRequestsNotifications();
    }
  }, [receivedDebtRequests]);

  return (
    <PageContainer>
      <Title title="Received debt requests" />

      {receivedDebtRequests.map(request => (
        <CardReceivedDebtRequest
          key={request.id}
          request={request}
          onAccept={(): void => props.acceptDebtRequest(request.id)}
          onReject={(): void => props.rejectDebtRequest(request.id)}
        />
      ))}
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  receivedDebtRequests: state.debtRequests.received,
  isNeededToUpdateList: state.debtRequests.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      countDebtRequestsNotifications: countNewReceivedDebtRequestsRequest,
      getReceivedDebtRequests: getReceivedDebtRequestsRequest,
      acceptDebtRequest: acceptDebtRequestRequest,
      rejectDebtRequest: rejectDebtRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabReceivedDebtRequests);

export { connectedComponent as TabReceivedDebtRequests };
