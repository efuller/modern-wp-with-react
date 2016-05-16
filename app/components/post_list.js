import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostList extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        if(! this.props.posts.posts) {
            return 'Loading...';
        }

        console.log(this.props.posts.posts);

        return this.props.posts.posts.map((post) => {
            return (
                <div key={post.id}>
                    <h3>{post.title.rendered}</h3>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, actions)(PostList);