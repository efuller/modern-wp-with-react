import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from '../store/configureStore';

import {
    App,
    PostList,
    SinglePost } from '../components';

export default (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PostList} />
            <Route path="/:slug" component={SinglePost} />
        </Route>
    </Router>
);