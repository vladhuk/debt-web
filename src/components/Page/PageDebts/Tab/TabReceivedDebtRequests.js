import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Title} from "../../../Title";
import {CardReceivedDebtRequest} from "../../../Card";
import {PageContainer} from "../../../Container";
import {
    acceptDebtRequestRequest,
    getReceivedDebtRequestsRequest,
    rejectDebtRequestRequest
} from "../../../../actions/debt-requests-actions";


function TabReceivedDebtRequests(props) {

    useEffect(() => {
        props.getReceivedDebtRequests();
    }, []);

    return (<PageContainer>
        <Title title='Received debt requests' />

        {
            props.receivedDebtRequests.map(request =>
                <CardReceivedDebtRequest
                    key={request.id}
                    request={request}
                    onAccept={() => props.acceptDebtRequest(request.id)}
                    onReject={() => props.rejectDebtRequest(request.id)}
                />
            )
        }
    </PageContainer>);
}

const mapStateToProps = state => ({
    receivedDebtRequests: state.debtRequests.received,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getReceivedDebtRequests: getReceivedDebtRequestsRequest,
    acceptDebtRequest: acceptDebtRequestRequest,
    rejectDebtRequest: rejectDebtRequestRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabReceivedDebtRequests);

export {connectedComponent as TabReceivedDebtRequests};