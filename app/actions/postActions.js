import axios from 'axios';
import {
    FETCH_POSTS,
    FETCH_POST,
    RESET_POST,
	FETCH_POSTS_BY_CATEGORY_ID,
	RESET_CATEGORY_POSTS } from './actionTypes';

const ROOT_URL = "http://wpapi.dev/wp-json/wp/v2";
//const ROOT_URL = "http://api.ericfuller.net/wp-json/wp/v2";

export function fetchPosts() {

    return function(dispatch) {
        axios.get(`${ROOT_URL}/posts`, {
            headers: { 'X-WP-Nonce': WP_API.nonce }
        })
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response
                });
            });
    }
}