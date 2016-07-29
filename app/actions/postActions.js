import axios from 'axios';
import {
    FETCH_POSTS,
    FETCH_POST,
    RESET_POST } from './actionTypes';

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

export function fetchPost(slug) {

    return function(dispatch) {
        axios.get(`${ROOT_URL}/posts/?filter[name]=${slug}`, {
            headers: { 'X-WP-Nonce': WP_API.nonce },
        })
            .then(response => {
                dispatch({
                    type: FETCH_POST,
                    payload: response
                });
            });
    }
}

export function resetActivePost() {

    return {
        type: RESET_POST
    }
}