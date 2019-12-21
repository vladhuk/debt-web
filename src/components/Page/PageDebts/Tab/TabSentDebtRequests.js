import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Title} from "../../../Title";
import {PageContainer} from "../../../Container";
import {ModalConfirmDelete} from "../../../Modal";
import {CardSentDebtRequest} from "../../../Card";
import {deleteSentDebtRequestRequest, getSentDebtRequestsRequest} from "../../../../actions/debt-requests-actions";


function TabSentDebtRequests(props) {
    const [deleteRequestModalShow, setDeleteRequestModalShow] = React.useState(false);
    const [requestIdForDelete, setRequestIdForDelete] = React.useState();

    const deleteRequest = id => {
        props.deleteSentDebtRequest(id);
        setDeleteRequestModalShow(false);
    };

    useEffect(() => {
        props.getSentDebtRequests();
    }, []);

    return (<PageContainer>
        <Title title='Sent debt requests' />

        {
            props.sentDebtRequests.map(request =>
                <CardSentDebtRequest
                    key={request.id}
                    request={request}
                    onDelete={() => {
                        setDeleteRequestModalShow(true);
                        setRequestIdForDelete(request.id);
                    }}
                />
            )
        }

        <ModalConfirmDelete
            show={deleteRequestModalShow}
            onHide={() => setDeleteRequestModalShow(false)}
            onDelete={() => deleteRequest(requestIdForDelete)}
        >
            Do you want to delete debt request?
        </ModalConfirmDelete>
    </PageContainer>);
}

const mapStateToProps = state => ({
    sentDebtRequests: state.debtRequests.sent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getSentDebtRequests: getSentDebtRequestsRequest,
    deleteSentDebtRequest: deleteSentDebtRequestRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabSentDebtRequests);

export {connectedComponent as TabSentDebtRequests};