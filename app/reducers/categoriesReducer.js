import { FETCH_CATEGORIES } from '../actions/actionTypes';

const INITIAL_STATE = { categories: [] };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_CATEGORIES:
			console.log(action);
			return action.payload;
		default:
			return state;
	}
}