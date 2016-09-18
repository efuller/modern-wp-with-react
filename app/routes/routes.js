import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from '../store/configureStore';

// Containers
import { AppContainer, HomeContainer } from '../containers';

import { SinglePost } from '../components';

export default (
    <Router history={history}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer} />
            <Route path="/:slug" component={SinglePost} />
        </Route>
    </Router>
);