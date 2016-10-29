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
							: <ContentNavigation direction={`next`} category={this.props.navNextCategory}/>
						}
						{
							(! this.props.navCategorySlug || ! this.props.navPreviousCategory )
								? ''
								: <ContentNavigation direction={`previous`} category={this.props.navPreviousCategory}/>
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
	let currentIndex = '';
	let navCurrentCategory = '';
	let navNextCategory = '';
	let navPreviousCategory = '';

	if (navCategorySlug) {
		navCurrentCategory = Utils.getCurrent(state.categories.categories, navCategorySlug);
		currentIndex = Utils.getIndex(state.categories.categories, navCurrentCategory);
		navNextCategory = Utils.getNext(state.categories.categories, currentIndex);
		navPreviousCategory = Utils.getPrevious(state.categories.categories, currentIndex);
	}

	return {
		categories: state.categories.categories,
		navCategorySlug,
		navNextCategory,
		navPreviousCategory
	}
}

export default connect(mapStateToProps)(App);