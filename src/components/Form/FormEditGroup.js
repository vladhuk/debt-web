import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllFriendsRequest} from "../../actions/friends-actions";


function FormEditGroup(props) {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState((props.group && props.group.title) || '');
    const [friends, setFriends] = useState([]);
    const [members, setMembers] = useState((props.group && props.group.members) || []);

    useEffect(() => {
        if (!props.friends.length) {
            props.getFriends();
        }
    }, []);

    useEffect(() => {
        const filteredFriends = members
            ? props.friends.filter(f => !members.map(m => m.id).find(id => id === f.id))
            : props.friends;
        setFriends(filteredFriends);
    }, [props.friends]);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            props.onSubmit({
                title,
                members: members.map(m => ({id: m.id})),
                id: props.group && props.group.id,
            });
            props.onHide();
        }

        setValidated(true);
    };

    const moveToFriendList = member => {
        setMembers(members.filter(m => m.id !== member.id));
        setFriends([...friends, member]);
    };

    const moveToMemberList = friend => {
        setFriends(friends.filter(f => f.id !== friend.id));
        setMembers([...members, friend]);
    };

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="title">
            <Form.Control
                type="text"
                placeholder="Enter group title"
                required
                onChange={event => setTitle(event.target.value)}
                autoComplete='off'
                value={title}
            />
        </Form.Group>

        <Form.Group controlId="members">
            <Form.Label>Members</Form.Label>
            <Form.Control as="select" multiple>
                {
                    members.map(member =>
                        <option key={member.id} onClick={() => moveToFriendList(member)}>
                            {member.username}
                        </option>
                    )
                }
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="friends">
            <Form.Label>Friends</Form.Label>
            <Form.Control as="select" multiple>
                {
                    friends.map(friend =>
                        <option key={friend.id} onClick={() => moveToMemberList(friend)}>
                            {friend.username}
                        </option>
                    )
                }
            </Form.Control>
        </Form.Group>

        <Row className='justify-content-center'>
            <Button type='submit' variant='success'>Confirm</Button>
        </Row>
    </Form>
}

const mapStateToProps = state => ({
    friends: state.friends,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getFriends: getAllFriendsRequest
}, dispatch);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(FormEditGroup);

export {connectedComponent as FormEditGroup};
