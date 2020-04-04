import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TitleWithButton } from '../Title';
import { ModalAddToBlackList, ModalConfirmDelete } from '../Modal';
import { CardUser } from '../Card';
import {
  deleteFromBlacklistRequest,
  getFullBlacklistRequest,
} from '../../actions/blacklist-actions';
import { PageContainer } from '../Container';
import { User } from '../../types/response';
import { State } from '../../types/redux';

interface StateProps {
  blacklist: User[];
}

interface DispatchProps {
  getFullBlacklist(): void;
  deleteFromBlacklist(id: number): void;
}

type Props = StateProps & DispatchProps;

function TabBlacklist(props: Props): JSX.Element {
  const { blacklist } = props;

  const [addToBlacklistModalShow, setAddToBlacklistModalShow] = React.useState(
    false
  );
  const [
    deleteFromBlacklistModalShow,
    setDeleteFromBlacklistModalShow,
  ] = React.useState(false);
  const [userIdForDelete, setUserIdForDelete] = React.useState(-1);

  const deleteUser = (id: number): void => {
    props.deleteFromBlacklist(id);
    setDeleteFromBlacklistModalShow(false);
  };

  useEffect(() => {
    props.getFullBlacklist();
  }, []);

  return (
    <PageContainer>
      <TitleWithButton
        title="Blacklist"
        buttonTitle="Add to blacklist"
        onButtonClick={(): void => setAddToBlacklistModalShow(true)}
      >
        <ModalAddToBlackList
          show={addToBlacklistModalShow}
          onHide={(): void => setAddToBlacklistModalShow(false)}
        />
      </TitleWithButton>

      {blacklist.map(user => (
        <CardUser
          key={user.id}
          user={user}
          onClose={(): void => {
            setDeleteFromBlacklistModalShow(true);
            setUserIdForDelete(user.id);
          }}
        />
      ))}

      <ModalConfirmDelete
        show={deleteFromBlacklistModalShow}
        onHide={(): void => setDeleteFromBlacklistModalShow(false)}
        onDelete={(): void => deleteUser(userIdForDelete)}
      >
        Do you want to delete user from blacklist?
      </ModalConfirmDelete>
    </PageContainer>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  blacklist: state.blacklist,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFullBlacklist: getFullBlacklistRequest,
      deleteFromBlacklist: deleteFromBlacklistRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBlacklist);

export { connectedComponent as TabBlacklist };
