import axios from 'axios';
import { FETCH_CATEGORIES } from './actionTypes';

const ROOT_URL = "http://wpapi.dev/wp-json/wp/v2";

export function fetchCategoriesSuccess(categories) {
	return {
		type: FETCH_CATEGORIES,
		payload: categories.data
	};
}

export function fetchCategories() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/categories`, {
			headers: { 'X-WP-Nonce': WP_API.nonce }
		})
			.then(categories => {
				dispatch(fetchCategoriesSuccess(categories));
			})
			.catch(error => {
				throw(error);
			});
	}
}