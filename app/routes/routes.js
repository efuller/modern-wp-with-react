import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from '../store/configureStore';

// Containers
import { AppContainer, HomeContainer, CategoryContainer, SingleContainer } from '../containers';

export default (
    <Router history={history}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer} />
	        <Route path="category/:category" component={CategoryContainer} />
            <Route path="story/:slug" component={SingleContainer} />
        </Route>
    </Router>
);