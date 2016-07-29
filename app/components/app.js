import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <main role="main">
                    {this.props.children}
                </main>
            </MuiThemeProvider>
        )
    }
}

export default App;