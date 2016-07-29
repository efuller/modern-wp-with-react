import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

const styles = {
    root: {
        backgroundColor: '#303F9F'
    },
    brand: {
        color: '#FFFFFF'
    }
};

class NavBar extends Component {

    render() {
        return <AppBar title={<Link style={styles.brand} to="/">Modern WP with React</Link>} style={styles.root}/>
    }
}

export default NavBar