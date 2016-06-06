import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SinglePost extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    
    render() {
        return (
            <div>
                Here is my post!
            </div>
        )
    }
}

export default SinglePost;