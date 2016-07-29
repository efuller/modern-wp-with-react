import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import LoadingCircular from './circular-progress';
import Paper  from 'material-ui/Paper';

const styles = {
    root: {
        marginBottom: '20px',
        padding: '20px'
    }
};

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
            <Paper style={styles.root}>
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}} />
                </div>
            </Paper>
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