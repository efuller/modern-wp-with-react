import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import LoadingCircular from './circular-progress';
import Paper from 'material-ui/Paper';

const styles = {
    root: {
        marginBottom: '20px',
        padding: '20px'
    }
};

class PostList extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        if(! this.props.posts) {
            return <div>Loading...</div>;
        }

        return this.props.posts.map((post) => {
            return (
                <Paper style={styles.root}>
                    <article key={post.id} className="card">
                        <Link to={post.slug}>
                            <h3>{post.title.rendered}</h3>
                        </Link>
                        <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                    </article>
                </Paper>
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
    return { posts: state.posts.posts };
}

export default connect(mapStateToProps, actions)(PostList);