import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/postActions';
import LoadingCircular from '../../components/elements/CircularProgress';
import CategoryPage from '../../components/CategoryPage/CategoryPage';

class CategoryContainer extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillUnmount() {
		this.props.actions.resetCategoryPosts();
	}

	componentWillMount() {
		this.props.actions.fetchPostsByCategoryId(this.props.params.category);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.currentCategory != nextProps.params.category) {
			this.props.actions.fetchPostsByCategoryId(nextProps.params.category);
		}
	}

	renderPost() {
		if(! this.props.isFetched) {
			return <LoadingCircular/>
		} else {
			return (
				<CategoryPage categoryPosts={this.props.postsInCategory} />
			)
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
	console.log('State:',state);
	const currentCategory = ownProps.params.category;
	return {
		postsInCategory: state.posts.categoryPosts.data,
		isFetched: state.posts.categoryPostsFetched,
		currentCategory: currentCategory
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);