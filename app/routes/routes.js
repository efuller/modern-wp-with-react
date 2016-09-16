import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from '../store/configureStore';

// Containers
import { AppContainer } from '../containers';

import {
    PostList,
    SinglePost } from '../components';

export default (
    <Router history={history}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={PostList} />
            <Route path="/:slug" component={SinglePost} />
        </Route>
    </Router>
);