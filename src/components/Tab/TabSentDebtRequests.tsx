import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Title } from '../Title';
import { PageContainer } from '../Container';
import { ModalConfirmDelete } from '../Modal';
import { CardSentDebtRequest } from '../Card';
import {
  deleteSentDebtRequestRequest,
  getSentDebtRequestsRequest,
} from '../../actions/debt-requests-actions';
import { DebtRequest } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  sentDebtRequests: DebtRequest[];
  isNeededToUpdateList: boolean;
}

interface DispatchProps {
  getSentDebtRequests(): void;
  deleteSentDebtRequest(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabSentDebtRequests(props: Props): JSX.Element {
  const { isNeededToUpdateList, sentDebtRequests } = props;

  const [deleteRequestModalShow, setDeleteRequestModalShow] = React.useState(
    false
  );
  const [requestIdForDelete, setRequestIdForDelete] = React.useState(-1);

  const deleteRequest = (id: number): void => {
    props.deleteSentDebtRequest(id);
    setDeleteRequestModalShow(false);
  };

  useEffect(() => {
    props.getSentDebtRequests();
  }, []);

  useEffect(() => {
    if (isNeededToUpdateList) {
      props.getSentDebtRequests();
    }
  }, [isNeededToUpdateList]);

  return (
    <PageContainer>
      <Title title="Sent debt requests" />

      {sentDebtRequests.map(request => (
        <CardSentDebtRequest
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
        Do you want to delete debt request?
      </ModalConfirmDelete>
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  sentDebtRequests: state.debtRequests.sent,
  isNeededToUpdateList: state.debtRequests.isNeededToUpdateList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getSentDebtRequests: getSentDebtRequestsRequest,
      deleteSentDebtRequest: deleteSentDebtRequestRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabSentDebtRequests);

export { connectedComponent as TabSentDebtRequests };
