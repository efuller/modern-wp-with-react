import React, { Component } from 'react';

class MainContainer extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default MainContainer;