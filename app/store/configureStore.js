import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

// Initial state
const initialState = {};

// Create the store
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

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('../reducers/', () => {
        const nextRootReducer = require('../reducers/').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;