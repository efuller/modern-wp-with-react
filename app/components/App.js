import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './NavBar';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavBar/>
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