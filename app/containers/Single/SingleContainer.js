import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingCircular from '../../components/elements/CircularProgress';
import SinglePost from '../../components/SinglePost/SinglePost';

class SingleContainer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	renderPost() {
		if(! this.props.isFetched) {
			return <LoadingCircular/>
		} else {
			return (
				<SinglePost post={this.props.currentPost} />
			);
		}
	}

	render() {
		return (
			<div className="content-container">
				{this.renderPost()}
			</div>
		)
	}
}

function getPostByID(posts, slug) {
	const course = posts.filter(post => post.slug === slug);
	if (course.length) { return course[0]; }
	return null;
}

function mapStateToProps(state, ownProps) {
	const slug = ownProps.params.slug;
	let post = '';

	if (slug) {
		post = getPostByID(state.posts.posts, slug);
	}

	return {
		posts: state.posts.posts,
		isFetched: state.posts.isFetched,
		currentPost: post
	};
}

export default connect(mapStateToProps)(SingleContainer);