import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Styles
var styles = require('./scss/style.scss');

// Containers
import {
    MainContainer,
    HomeContainer } from './containers';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainContainer}>
            <IndexRoute component={HomeContainer} />
        </Route>
    </Router>, document.getElementById("app"));