import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Title} from "../../../Title";
import {CardReceivedRepaymentRequest} from "../../../Card";
import {PageContainer} from "../../../Container";
import {
    acceptRepaymentRequestRequest,
    countNewReceivedRepaymentRequestsRequest,
    getReceivedRepaymentRequestsRequest,
    rejectRepaymentRequestRequest
} from "../../../../actions/repayment-requests-actions";


function TabReceivedRepaymentRequests(props) {

    useEffect(() => {
        props.getReceivedRepaymentRequests();
    }, []);

    useEffect(() => {
        if (props.isNeededToUpdateList) {
            props.getReceivedRepaymentRequests();
        }
    }, [props.isNeededToUpdateList]);

    useEffect(() => {
        if (props.receivedRepaymentRequests.length) {
            props.countRepaymentRequestsNotifications();
        }
    }, [props.receivedRepaymentRequests]);

    return (<PageContainer>
        <Title title='Received repayment requests' />

        {
            props.receivedRepaymentRequests.map(request =>
                <CardReceivedRepaymentRequest
                    key={request.id}
                    request={request}
                    onAccept={() => props.acceptRepaymentRequest(request.id)}
                    onReject={() => props.rejectRepaymentRequest(request.id)}
                />
            )
        }
    </PageContainer>);
}

const mapStateToProps = state => ({
    receivedRepaymentRequests: state.repaymentRequests.received,
    isNeededToUpdateList: state.repaymentRequests.isNeededToUpdateList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    countRepaymentRequestsNotifications: countNewReceivedRepaymentRequestsRequest,
    getReceivedRepaymentRequests: getReceivedRepaymentRequestsRequest,
    acceptRepaymentRequest: acceptRepaymentRequestRequest,
    rejectRepaymentRequest: rejectRepaymentRequestRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabReceivedRepaymentRequests);

export {connectedComponent as TabReceivedRepaymentRequests};