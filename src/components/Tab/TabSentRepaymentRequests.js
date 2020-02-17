import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Title} from '../Title';
import {PageContainer} from '../Container';
import {ModalConfirmDelete} from '../Modal';
import {
  deleteSentRepaymentRequestRequest,
  getSentRepaymentRequestsRequest,
} from '../../actions/repayment-requests-actions';
import {CardSentRepaymentRequest} from '../Card';

function TabSentRepaymentRequests(props) {
  const [deleteRequestModalShow, setDeleteRequestModalShow] = React.useState(
    false
  );
  const [requestIdForDelete, setRequestIdForDelete] = React.useState();

  useEffect(() => {
    props.getSentRepaymentRequests();
  }, []);

  useEffect(() => {
    if (props.isNeededToUpdateList) {
      props.getSentRepaymentRequests();
    }
  }, [props.isNeededToUpdateList]);

  const deleteRequest = id => {
    props.deleteSentRepaymentRequest(id);
    setDeleteRequestModalShow(false);
  };

  return (
    <PageContainer>
      <Title title="Sent repayment requests" />

      {props.sentRepaymentRequests.map(request => (
        <CardSentRepaymentRequest
          key={request.id}
          request={request}
          onDelete={() => {
            setDeleteRequestModalShow(true);
            setRequestIdForDelete(request.id);
          }}
        />
      ))}

      <ModalConfirmDelete
        show={deleteRequestModalShow}
        onHide={() => setDeleteRequestModalShow(false)}
        onDelete={() => deleteRequest(requestIdForDelete)}
      >
        Do you want to delete repayment request?
      </ModalConfirmDelete>
    </PageContainer>
  );
}

const mapStateToProps = state => ({
  sentRepaymentRequests: state.repaymentRequests.sent,
  isNeededToUpdateList: state.repaymentRequests.isNeededToUpdateList,
});

const mapDispatchToProps = dispatch =>
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
