import React, { Component } from 'react';
import { SinglePost } from '../../components';

class SinglePostContainer extends Component {
    
    render() {
       return <SinglePost slug={this.props.params.slug}/>
    }
}

export default SinglePostContainer;