import React, {useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import Sidebar from "../../Sidebar";
import NotificationsCounter from "../../NotificationsCounter";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {countNewReceivedDebtRequestsRequest} from "../../../actions/debt-requests-actions";
import {countNewReceivedRepaymentRequestsRequest} from "../../../actions/repayment-requests-actions";

function DebtsPageSidebar(props) {
    useEffect(() => {
        props.countDebtRequestsNotifications();
        props.countRepaymentRequestsNotifications();
    }, []);

    return <Sidebar>
        <LinkContainer to='/debts/all' className='border-bottom'>
            <Nav.Link>All</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/debts/requests/sent'>
            <Nav.Link>Sent requests</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/debts/requests/received' className='border-bottom'>
            <Nav.Link>
                Received requests <NotificationsCounter>{props.debtRequestsNotificationsNumber}</NotificationsCounter>
            </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/repayments/requests/sent'>
            <Nav.Link>Sent requests</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/repayments/requests/received'>
            <Nav.Link>
                Received requests <NotificationsCounter>{props.repaymentRequestsNotificationNumber}</NotificationsCounter>
            </Nav.Link>
        </LinkContainer>
    </Sidebar>
}


const mapStateToProps = state => ({
    debtRequestsNotificationsNumber: state.debtRequests.number,
    repaymentRequestsNotificationNumber: state.repaymentRequests.number,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    countDebtRequestsNotifications: countNewReceivedDebtRequestsRequest,
    countRepaymentRequestsNotifications: countNewReceivedRepaymentRequestsRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DebtsPageSidebar)
