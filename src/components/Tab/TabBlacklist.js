import React, {useEffect} from "react";
import {TitleWithButton} from "../Title";
import {ModalAddToBlackList, ModalConfirmDelete} from "../Modal";
import {CardUser} from "../Card";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteFromBlaklistRequest, getFullBlacklistRequest} from "../../actions/blacklist-actions";
import {PageContainer} from "../Container";

function TabBlacklist(props) {
    const [addToBlacklistModalShow, setAddToBlacklistModalShow] = React.useState(false);
    const [deleteFromBlacklistModalShow, setDeleteFromBlacklistModalShow] = React.useState(false);
    const [userIdForDelete, setUserIdForDelete] = React.useState();

    const deleteUser = id => {
        props.deleteFromBlacklist(id);
        setDeleteFromBlacklistModalShow(false);
    };

    useEffect(() => {
        props.getFullBlacklist();
    }, []);

    return <PageContainer>
        <TitleWithButton title='Blacklist'
                         buttonTitle='Add to blacklist'
                         onButtonClick={() => setAddToBlacklistModalShow(true)}
        >
            <ModalAddToBlackList
                show={addToBlacklistModalShow}
                onHide={() => setAddToBlacklistModalShow(false)}
            />
        </TitleWithButton>

        {
            props.blacklist.map(user =>
                <CardUser
                    key={user.id}
                    user={user}
                    onClose={() => {
                        setDeleteFromBlacklistModalShow(true);
                        setUserIdForDelete(user.id);
                    }}
                />
            )
        }

        <ModalConfirmDelete
            show={deleteFromBlacklistModalShow}
            onHide={() => setDeleteFromBlacklistModalShow(false)}
            onDelete={() => deleteUser(userIdForDelete)}
        >
            Do you want to delete user from blacklist?
        </ModalConfirmDelete>
    </PageContainer>
}

const mapStateToProps = state => ({
    blacklist: state.blacklist,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getFullBlacklist: getFullBlacklistRequest,
    deleteFromBlacklist: deleteFromBlaklistRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TabBlacklist);

export {connectedComponent as TabBlacklist};