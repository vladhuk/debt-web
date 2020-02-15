import React, {useEffect} from "react";
import {TitleWithButtons} from "../Title";
import {ModalCreateDebt, ModalRepayDebt} from "../Modal";
import {CardDebt} from "../Card";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PageContainer} from "../Container";
import {getDebtsRequest} from "../../actions/debts-actions";

function TabAllDebts(props) {
    const [createDebtModalShow, setCreateDebtModalShowModalShow] = React.useState(false);
    const [repayDebtModalShow, setRepayDebtModalShowModalShow] = React.useState(false);

    useEffect(() => {
        props.getDebts();
    }, []);

    return <PageContainer>
        <TitleWithButtons
            title='Debts'
            buttons={[
                {title: 'Create debt', onClick: () => setCreateDebtModalShowModalShow(true)},
                {title: 'Repay debt', onClick: () => setRepayDebtModalShowModalShow(true)},
            ]}
        >
            <ModalRepayDebt
                show={repayDebtModalShow}
                onHide={() => setRepayDebtModalShowModalShow(false)}
                debts={props.debts}
            />
            <ModalCreateDebt
                show={createDebtModalShow}
                onHide={() => setCreateDebtModalShowModalShow(false)}
            />
        </TitleWithButtons>

        {
            props.debts.map(debt =>
                <CardDebt
                    key={debt.partner.id}
                    debt={debt}
                />
            )
        }
    </PageContainer>
}

const mapStateToProps = state => ({
    debts: state.debts,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getDebts: getDebtsRequest,
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabAllDebts);

export {connectedComponent as TabAllDebts};