import React, { Component } from 'react'
import PropTypes from 'prop-types'


class AddNote extends Component {

	static PropTypes = {
		onAdd: PropTypes.func.isRequired,
	}


	state = {
		name: ""
	}

	onNoteChange = (e) => {
		this.setState({name: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.onAdd(this.state.name)
		this.setState({name: ''})
	}

	render() {
		return(
			<div className='col-md-6 col-xs-offset-2'>
				<form onSubmit={this.onSubmit}>
					<input
						className='add-entry'
            			type='text'
            			placeholder='Add a Note'
            			value={this.state.name}
            			onChange={this.onNoteChange}
					/>
					<input
						type="submit"
						value="Add Note"
					/>
					</form>
			</div>
			)
	}
}




export default AddNote