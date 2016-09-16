import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../../components/Header/Header';

class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header/>
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

export default App;