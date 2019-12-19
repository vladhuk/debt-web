import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {PageContainer} from "../../Container";
import {TitleWithButton} from "../../Title";
import {
    createGroupRequest,
    deleteGroupRequest,
    getGroupsRequest,
    updateGroupRequest
} from "../../../actions/groups-actions";
import {CardGroup} from "../../Card";


function PageGroups(props) {

    useEffect(() => {
        props.getGroups();
    }, []);

    return <PageContainer>
        <TitleWithButton
            title='Groups'
            buttonTitle='Create group'
            onButtonClick={null}
        >
            {/*Modal create*/}
        </TitleWithButton>

        {
            props.groups.map(group =>
                <CardGroup
                    key={group.id}
                    title={group.title}
                    onTitleClick={null}
                    onClose={() => props.deleteGroup(group.id)}
                />
            )
        }
    </PageContainer>;
}

const mapStateToProps = state => ({
    groups: state.groups.groups,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getGroups: getGroupsRequest,
    deleteGroup: deleteGroupRequest,
    updateGroup: updateGroupRequest,
    createGroup: createGroupRequest,

}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PageGroups);

export {connectedComponent as PageGroups};