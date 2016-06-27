import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const rootReducer = combineReducers({
    posts: postsReducer,
    routing: routerReducer
});

export default rootReducer;