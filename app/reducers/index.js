import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import categoriesReducer from './categoriesReducer';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const rootReducer = combineReducers({
	categories: categoriesReducer,
    posts: postsReducer,
    routing: routerReducer
});

export default rootReducer;