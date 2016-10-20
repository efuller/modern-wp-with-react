import {
    FETCH_POSTS,
    FETCH_POST,
    RESET_POST,
	FETCH_POSTS_BY_CATEGORY_ID,
	RESET_CATEGORY_POSTS } from '../actions/actionTypes';

const INITIAL_STATE = { posts: [], post: null, isFetched: false };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, posts: action.payload.data, isFetched: true };
        default:
            return state;
    }
}