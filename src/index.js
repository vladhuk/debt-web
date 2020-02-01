import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/root-reducer";


const allStoreEnchanters = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(rootReducer, allStoreEnchanters);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
