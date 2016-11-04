import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import { fetchCategories } from './actions/categoryActions';
import { fetchPosts } from './actions/postActions';
import routes from './routes/routes';

// Styles
import './scss/style.scss';

store.dispatch(fetchCategories());
store.dispatch(fetchPosts());

const Root = () => (
    <Provider store={store}>
        <div>
        {routes}
        </div>
    </Provider>
);

ReactDOM.render(
    <Root/>,
    document.getElementById('app')
);