import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store from './store/configureStore';
import routes from './routes/routes';

// Styles
var styles = require('./scss/style.scss');

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document.getElementById("app"));