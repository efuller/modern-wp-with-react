import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
import LoadingCircular from '../../components/elements/CircularProgress';
import CategoryPage from '../../components/CategoryPage/CategoryPage';

class CategoryContainer extends Component {

	renderPost() {
		// if(! this.props.isFetched) {
		// 	return <LoadingCircular/>
		// } else {
		// 	return (
		// 		<CategoryPage />
		// 	)
		// }
		return (
			<CategoryPage/>
		)
	}

	render() {
		return (
			<div>
				{this.renderPost()}
			</div>
		)
	}
}

// function mapStateToProps(state) {
// 	return { posts: state.posts.posts, isFetched: state.posts.isFetched };
// }
//
// export default connect(mapStateToProps, actions)(CategoryContainer);
export default CategoryContainer;