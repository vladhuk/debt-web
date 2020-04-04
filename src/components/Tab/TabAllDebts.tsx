import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TitleWithButtons } from '../Title';
import { ModalCreateDebt, ModalRepayDebt } from '../Modal';
import { CardDebt } from '../Card';
import { PageContainer } from '../Container';
import { getDebtsRequest } from '../../actions/debts-actions';
import { Debt } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  debts: Debt[];
}

interface DispatchProps {
  getDebts(): void;
}

type Props = StateProps & DispatchProps;

function TabAllDebts(props: Props): JSX.Element {
  const { debts } = props;

  const [createDebtModalShow, setCreateDebtModalShowModalShow] = React.useState(
    false
  );
  const [repayDebtModalShow, setRepayDebtModalShowModalShow] = React.useState(
    false
  );

  useEffect(() => {
    props.getDebts();
  }, []);

  return (
    <PageContainer>
      <TitleWithButtons
        title="Debts"
        buttons={[
          {
            title: 'Create debt',
            onClick: (): void => setCreateDebtModalShowModalShow(true),
          },
          {
            title: 'Repay debt',
            onClick: (): void => setRepayDebtModalShowModalShow(true),
          },
        ]}
      >
        <ModalRepayDebt
          show={repayDebtModalShow}
          onHide={(): void => setRepayDebtModalShowModalShow(false)}
          debts={debts}
        />
        <ModalCreateDebt
          show={createDebtModalShow}
          onHide={(): void => setCreateDebtModalShowModalShow(false)}
        />
      </TitleWithButtons>

      {debts.map(debt => (
        <CardDebt key={debt.partner.id} debt={debt} />
      ))}
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  debts: state.debts,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getDebts: getDebtsRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabAllDebts);

export { connectedComponent as TabAllDebts };
