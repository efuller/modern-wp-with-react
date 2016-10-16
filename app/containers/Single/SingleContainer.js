import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/postActions';
import LoadingCircular from '../../components/elements/CircularProgress';
import SinglePost from '../../components/SinglePost/SinglePost';

class SingleContainer extends Component {

	renderPost() {
		if(! this.props.isFetched) {
			return <LoadingCircular/>
		} else {
			return (
				<SinglePost post={this.props.posts[0]} />
			);
		}
	}

	render() {
		return (
			<div>
				{this.renderPost()}
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {

	return {
		posts: state.posts.posts,
		isFetched: state.posts.isFetched,

	};
}

export default connect(mapStateToProps)(SingleContainer);