import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import {FormSignIn} from "../../Form";
import {setToken} from "../../../util";
import {connect} from "react-redux";
import {getCurrentUserRequest} from "../../../actions/users-actions";
import {bindActionCreators} from "redux";


function PageSignIn(props) {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const onSuccessSign = accessToken => {
        setToken(accessToken);
        props.getCurrentUser();
        props.history.push('/friends/all');
    };

    return <Container>
        <Alert className='w-50 mx-auto text-center mt-4' variant='danger' show={isAlertVisible}>
            Incorrect username or password!
        </Alert>
        <h1 className='text-center p-2'>Sign In</h1>
        <FormSignIn
            className='mx-auto col-md-4'
            onSubmit={() => setIsAlertVisible(false)}
            onError={() => setIsAlertVisible(true)}
            onSuccessSign={onSuccessSign}
        />
    </Container>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getCurrentUser: getCurrentUserRequest,
}, dispatch);

const connectedComponent = connect(null, mapDispatchToProps)(PageSignIn);

export {connectedComponent as PageSignIn};
