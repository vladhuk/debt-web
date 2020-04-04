import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Title } from '../Title';
import { PageContainer } from '../Container';
import { ModalConfirmDelete } from '../Modal';
import {
  deleteSentRepaymentRequestRequest,
  getSentRepaymentRequestsRequest,
} from '../../actions/repayment-requests-actions';
import { CardSentRepaymentRequest } from '../Card';
import { RepaymentRequest } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  sentRepaymentRequests: RepaymentRequest[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  getSentRepaymentRequests(): void;
  deleteSentRepaymentRequest(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabSentRepaymentRequests(props: Props): JSX.Element {
  const { isNeededToUpdateList, sentRepaymentRequests } = props;

  const [deleteRequestModalShow, setDeleteRequestModalShow] = React.useState(
    false
  );
  const [requestIdForDelete, setRequestIdForDelete] = React.useState(-1);

  useEffect(() => {
    props.getSentRepaymentRequests();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getSentRepaymentRequests();
    }
  }, [isNeededToUpdateList]);

  const deleteRequest = (id: number): void => {
    props.deleteSentRepaymentRequest(id);
    setDeleteRequestModalShow(false);
  };

  return (
    <PageContainer>
      <Title title="Sent repayment requests" />

      {sentRepaymentRequests.map(request => (
        <CardSentRepaymentRequest
          key={request.id}
          request={request}
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
        Do you want to delete repayment request?
      </ModalConfirmDelete>
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  sentRepaymentRequests: state.repaymentRequests.sent,
  isNeededToUpdateList: state.repaymentRequests.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getSentRepaymentRequests: getSentRepaymentRequestsRequest,
      deleteSentRepaymentRequest: deleteSentRepaymentRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabSentRepaymentRequests);

export { connectedComponent as TabSentRepaymentRequests };
