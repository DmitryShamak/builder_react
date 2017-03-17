import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './index';

const reducer = (state={}, action) => state;
const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({
        type: 'APP_START'
    });
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
