import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import LoadingCircular from './circular-progress';

class SinglePost extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillUnmount() {
        this.props.actions.resetActivePost();
    }

    componentWillMount() {
        this.props.actions.fetchPost(this.props.params.slug);
    }
    
    render() {
        if(! this.props.post) {
            return <LoadingCircular/>;
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

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);