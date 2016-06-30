import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {syncHistoryWithStore } from 'react-router-redux';

// Redux
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';

// Apply redux middleware
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers); // create the store
const initialState = {};

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(
            reduxThunk
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const history = syncHistoryWithStore(browserHistory, store);

// Styles
var styles = require('./scss/style.scss');

if(module.hot) {
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById("app"));