import React from 'react';
import {render} from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import {spamBlockerMiddleware} from "./redux/middleware";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, spamBlockerMiddleware, saga)))

saga.run(sagaWatcher)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
