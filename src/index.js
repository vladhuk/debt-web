import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "./reducers/all-reducers";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';


const allStoreEnchanters = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers, allStoreEnchanters);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
