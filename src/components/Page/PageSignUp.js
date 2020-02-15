import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setToken} from "../../util";
import {getCurrentUserRequest} from "../../actions/users-actions";
import Alert from "react-bootstrap/Alert";
import {FormSignUp} from "../Form";


function PageSignUp(props) {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const onSuccessSign = accessToken => {
        setToken(accessToken);
        props.getCurrentUser();
        props.history.push('/friends/all');
    };

    return <Container>
        <Alert className='w-50 mx-auto text-center mt-4' variant='danger' show={isAlertVisible}>
            Username already exist!
        </Alert>
        <h1 className='text-center p-2'>Sign Up</h1>
        <FormSignUp
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

const connectedComponent = connect(null, mapDispatchToProps)(PageSignUp);

export {connectedComponent as PageSignUp};

