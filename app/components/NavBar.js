import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
    root: {
        backgroundColor: '#303F9F'
    }
};

class NavBar extends Component {

    render() {
        return <AppBar style={styles.root}/>
    }
}

export default NavBar