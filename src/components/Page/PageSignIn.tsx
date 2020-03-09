import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouterProps } from 'react-router';
import { FormSignIn } from '../Form';
import { setToken } from '../../util';
import { getCurrentUserRequest } from '../../actions/users-actions';

interface DispatchProps {
  getCurrentUser(): void;
}

type Props = DispatchProps & RouterProps;

function PageSignIn(props: Props): JSX.Element {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const onSuccessSign = (accessToken: string): void => {
    setToken(accessToken);
    props.getCurrentUser();
    props.history.push('/friends/all');
  };

  return (
    <Container>
      <Alert
        className="w-50 mx-auto text-center mt-4"
        variant="danger"
        show={isAlertVisible}
      >
        Incorrect username or password!
      </Alert>
      <h1 className="text-center p-2">Sign In</h1>
      <FormSignIn
        className="mx-auto col-md-4"
        onSubmit={(): void => setIsAlertVisible(false)}
        onError={(): void => setIsAlertVisible(true)}
        onSuccessSign={onSuccessSign}
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getCurrentUser: getCurrentUserRequest,
    },
    dispatch
  );

const connectedComponent = connect(null, mapDispatchToProps)(PageSignIn);

export { connectedComponent as PageSignIn };
