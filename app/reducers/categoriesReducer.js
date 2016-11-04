import { FETCH_CATEGORIES } from '../actions/actionTypes';

const INITIAL_STATE = { categories: [], isFetched: false };

export default function(state = INITIAL_STATE,  action) {
	switch(action.type) {
		case FETCH_CATEGORIES:
			return { ...state, categories: action.payload, isFetched: true };
		default:
			return state;
	}
}