import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    MainContainer,
    HomeContainer } from './containers';

export default (
    <Route path="/" component={MainContainer}>
        <IndexRoute component={HomeContainer} />
    </Route>
);