import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
import LoadingCircular from '../../components/elements/CircularProgress';
import HomePage from '../../components/Home/HomePage';

class HomeContainer extends Component {

	renderPost() {
		if(! this.props.isFetched) {
			return <LoadingCircular/>
		} else {
			return (
				<HomePage posts={this.props.posts} />
			)
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

function mapStateToProps(state) {
	return { posts: state.posts.posts, isFetched: state.posts.isFetched };
}

export default connect(mapStateToProps, actions)(HomeContainer);