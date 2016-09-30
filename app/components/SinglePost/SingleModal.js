import React, { Component } from 'react';
import { default as ReactModal } from 'react-modal';

class SingleModal extends Component {
	constructor (props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.state = {
			open: false
		}

	}

	openModal () { this.setState({open: true}); }

	closeModal () { this.setState({open: false}); }

	render () {
		return (
			<div>
				<button onClick={this.openModal}>Open Modal</button>
				<ReactModal isOpen={this.state.open}>
					<h1>Basic Modal</h1>
					<button onClick={this.closeModal}>Close</button>
					<input />
					<input />
				</ReactModal>
			</div>
		);
	}
}

export default SingleModal;