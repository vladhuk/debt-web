import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import {TitleWithButton} from "../../../Title";
import {ModalAddToBlackList, ModalConfirmDelete} from "../../../Modal";
import UserCard from "../../../UserCard";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteFromBlaklistRequest, getFullBlacklistRequest} from "../../../../actions/blacklist-actions";

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

    return <Container className='col-md-9 py-5'>
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
                <UserCard
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
    </Container>
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