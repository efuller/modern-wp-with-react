import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header/>
					<Navigation categories={this.props.categories} />
					<div className="container">
						<main role="main">
							{this.props.children}
						</main>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories.categories
	}
}

export default connect(mapStateToProps)(App);