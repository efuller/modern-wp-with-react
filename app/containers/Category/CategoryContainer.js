import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/postActions';
import LoadingCircular from '../../components/elements/CircularProgress';
import CategoryPage from '../../components/CategoryPage/CategoryPage';

class CategoryContainer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	static contextTypes = {
		router: PropTypes.object
	};

	renderPost() {
		if(! this.props.postsInCategory.length) {
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

function getCurrentCategory(categories, categorySlug) {
	const category = categories.filter(category => category.slug == categorySlug);
	if (category.length) return category[0];
	return null;
}

function getCategoryPosts(posts, currentCategory) {
	const categoryPosts = posts.filter(post => post.categories[0] == currentCategory.id);
	if (categoryPosts.length) return categoryPosts;
	return null;
}

function mapStateToProps(state, ownProps) {
	const categorySlug = ownProps.params.category;
	let currentCategory = null;
	let categoryPostList = [];

	if (categorySlug) {
		currentCategory = getCurrentCategory(state.categories.categories, categorySlug);
	}

	if (state.posts.isFetched) {
		categoryPostList = getCategoryPosts(state.posts.posts, currentCategory);
	}

	return {
		postsInCategory: categoryPostList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);