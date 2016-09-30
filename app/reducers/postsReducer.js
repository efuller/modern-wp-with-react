import {
    FETCH_POSTS,
    FETCH_POST,
    RESET_POST,
	FETCH_POSTS_BY_CATEGORY_ID } from '../actions/actionTypes';

const INITIAL_STATE = { posts: [], post: null, isFetched: false, categoryPosts: [], categoryPostsFetched: false };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, posts: action.payload.data, isFetched: true };
        case FETCH_POST:
            return { ...state, post: action.payload.data[0] };
	    case FETCH_POSTS_BY_CATEGORY_ID:
	    	return { ...state, categoryPosts: action.payload, categoryPostsFetched: true };
        case RESET_POST:
            return { ...state, post: null };
        default:
            return state;
    }
}