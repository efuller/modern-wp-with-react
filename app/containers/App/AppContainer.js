import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ContentNavigation from '../../components/Navigation/ContentNavigation';
import * as Utils from '../../helpers/utils';

class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header/>
					<Navigation categories={this.props.categories} navCategorySlug={this.props.navCategorySlug} />
					<div className="container">
						{
							(! this.props.navCategorySlug || ! this.props.navNextCategory )
							? ''
							: <ContentNavigation direction="next" type="category" destination={this.props.navNextCategory}/>
						}
						{
							(! this.props.navCategorySlug || ! this.props.navPreviousCategory )
								? ''
								: <ContentNavigation direction="previous" type="category" destination={this.props.navPreviousCategory}/>
						}

						{
							(! this.props.navPageSlug || ! this.props.navNextPage )
								? ''
								: <ContentNavigation direction="next" type="page" destination={this.props.navNextPage}/>
						}
						{
							(! this.props.navPageSlug || ! this.props.navPreviousPage )
								? ''
								: <ContentNavigation direction="previous" type="page" destination={this.props.navPreviousPage}/>
						}
						<main role="main">
							{this.props.children}
						</main>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let navCategorySlug = ownProps.params.category;
	let navPageSlug = ownProps.params.slug;
	let currentIndex = '';
	let currentPageIndex = '';
	let navCurrentCategory = '';
	let navCurrentPage = '';
	let navNextCategory = '';
	let navNextPage = '';
	let navPreviousCategory = '';
	let navPreviousPage = '';

	if (navCategorySlug) {
		navCurrentCategory = Utils.getCurrent(state.categories.categories, navCategorySlug);
		currentIndex = Utils.getIndex(state.categories.categories, navCurrentCategory);
		navNextCategory = Utils.getNext(state.categories.categories, currentIndex);
		navPreviousCategory = Utils.getPrevious(state.categories.categories, currentIndex);
	}

	if (navPageSlug) {
		navCurrentPage = Utils.getCurrent(state.posts.posts, navPageSlug);
		currentPageIndex = Utils.getIndex(state.posts.posts, navCurrentPage);
		navNextPage = Utils.getNext(state.posts.posts, currentPageIndex);
		navPreviousPage = Utils.getPrevious(state.posts.posts, currentPageIndex);
	}

	return {
		categories: state.categories.categories,
		posts: state.posts.posts,
		navCategorySlug,
		navNextCategory,
		navPreviousCategory,
		navPageSlug,
		currentPageIndex,
		navCurrentPage,
		navNextPage,
		navPreviousPage
	}
}

export default connect(mapStateToProps)(App);