const INITIAL_STATE = [];
import { FETCH_POSTS } from '../actions/types';

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return{ ...state, posts: action.payload };
    }

    return state;
}