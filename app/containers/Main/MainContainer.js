import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class MainContainer extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        console.log(this.props.posts);
        if(! this.props.posts.posts) {
            return 'Loading...';
        }

        return this.props.posts.posts.map((post) => {
            return (
                <div>
                    <h3>{post.author}</h3>
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

export default connect(mapStateToProps, actions)(MainContainer);