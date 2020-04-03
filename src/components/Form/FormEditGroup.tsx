import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Col from 'react-bootstrap/Col';
import { getAllFriendsRequest } from '../../actions/friends-actions';
import { IconExchange } from '../Icon';
import { Group, User } from '../../types/response';
import { GroupPayload } from '../../types/request';
import { State } from '../../types/redux';

interface StateProps {
  friends: User[];
}

interface DispatchProps {
  getFriends(): void;
}

interface OwnProps {
  group?: Group;
  onSubmit(group: GroupPayload): void;
  onHide(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

function FormEditGroup(props: Props): JSX.Element {
  const { group, friends } = props;

  const [validatedTitle, setValidatedTitle] = useState(true);
  const [title, setTitle] = useState((group && group.title) || '');
  const [friendList, setFriendList] = useState<User[]>([]);
  const [memberList, setMemberList] = useState((group && group.members) || []);

  useEffect(() => {
    if (!friends.length) {
      props.getFriends();
    }
  }, []);

  useEffect(() => {
    const filteredFriends = memberList
      ? friends.filter(f => !memberList.map(m => m.id).find(id => id === f.id))
      : friends;
    setFriendList(filteredFriends);
  }, [friends]);

  const validateFields = (): void => {
    setValidatedTitle(!!title.length);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    validateFields();

    if (form.checkValidity()) {
      props.onSubmit({
        title,
        members: memberList.map(m => ({ id: m.id })),
        id: group && group.id,
      });
      props.onHide();
    }
  };

  const moveToFriendList = (member: User): void => {
    setMemberList(memberList.filter(m => m.id !== member.id));
    setFriendList([...friendList, member]);
  };

  const moveToMemberList = (friend: User): void => {
    setFriendList(friendList.filter(f => f.id !== friend.id));
    setMemberList([...memberList, friend]);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label column={false}>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter group title"
          autoComplete="off"
          required
          isInvalid={!validatedTitle}
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setTitle(event.target.value);
            setValidatedTitle(true);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a title
        </Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="members">
            <Form.Label column={false}>Members</Form.Label>
            <Form.Control className="vh-25" as="select" multiple>
              {memberList.map(member => (
                <option
                  key={member.id}
                  onClick={(): void => moveToFriendList(member)}
                >
                  {member.username}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <div className="d-flex align-items-center">
          <IconExchange />
        </div>
        <Col>
          <Form.Group controlId="friends">
            <Form.Label column={false}>Friends</Form.Label>
            <Form.Control className="vh-25" as="select" multiple>
              {friendList.map(friend => (
                <option
                  key={friend.id}
                  onClick={(): void => moveToMemberList(friend)}
                >
                  {friend.username}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Button type="submit" variant="success">
          Confirm
        </Button>
      </Row>
    </Form>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  friends: state.friends.list,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getFriends: getAllFriendsRequest,
    },
    dispatch
  );

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEditGroup);

export { connectedComponent as FormEditGroup };
