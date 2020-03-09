import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Alert from 'react-bootstrap/Alert';
import { RouterProps } from 'react-router';
import { setToken } from '../../util';
import { getCurrentUserRequest } from '../../actions/users-actions';
import { FormSignUp } from '../Form';

interface DispatchProps {
  getCurrentUser(): void;
}

type Props = DispatchProps & RouterProps;

function PageSignUp(props: Props): JSX.Element {
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
        Username already exist!
      </Alert>
      <h1 className="text-center p-2">Sign Up</h1>
      <FormSignUp
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

const connectedComponent = connect(null, mapDispatchToProps)(PageSignUp);

export { connectedComponent as PageSignUp };
