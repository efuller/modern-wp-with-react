import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class SinglePost extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.slug);
    }
    
    render() {
        if(! this.props.post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post }
}

export default connect(mapStateToProps, actions)(SinglePost);