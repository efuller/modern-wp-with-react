import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    App,
    PostList,
    SinglePost } from './components';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostList} />
        <Route path="/:slug" component={SinglePost} />
    </Route>
);