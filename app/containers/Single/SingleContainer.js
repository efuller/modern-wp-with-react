import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/postActions';
import LoadingCircular from '../../components/elements/CircularProgress';
import SinglePost from '../../components/SinglePost/SinglePost';
import SingleModal from '../../components/SinglePost/SingleModal';

class SingleContainer extends Component {
	static contextTypes = {
		//router: PropTypes.object
	};

	componentWillUnmount() {
		//this.props.actions.resetCategoryPosts();
	}

	componentWillMount() {
		//this.props.actions.fetchPostsByCategoryId(this.props.params.category);
	}

	componentWillReceiveProps(nextProps) {
		// if (this.props.currentCategory != nextProps.params.category) {
		// 	this.props.actions.fetchPostsByCategoryId(nextProps.params.category);
		// }
	}

	renderPost() {
		if(! this.props.isFetched) {
			return <LoadingCircular/>
		} else {
			return (
				//<SinglePost post={this.props.posts[0]} />
				<SingleModal/>
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
	// console.log(state.posts.posts);
	//const currentCategory = ownProps.params.category;
	return {
		posts: state.posts.posts,
		isFetched: state.posts.isFetched,

	};
}

export default connect(mapStateToProps)(SingleContainer);