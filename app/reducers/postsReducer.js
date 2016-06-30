const INITIAL_STATE = { posts: [], post: null };
import {
    FETCH_POSTS,
    FETCH_POST,
    RESET_POST } from '../actions/types';

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, posts: action.payload.data };
        case FETCH_POST:
            return { ...state, post: action.payload.data[0] };
        case RESET_POST:
            return { ...state, post: null };
        default:
            return state;
    }
}