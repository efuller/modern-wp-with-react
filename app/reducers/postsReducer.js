const INITIAL_STATE = [];
import {
    FETCH_POSTS,
    FETCH_POST } from '../actions/types';

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, posts: action.payload };
        case FETCH_POST:
            return { ...state, post: action.payload };
    }

    return state;
}