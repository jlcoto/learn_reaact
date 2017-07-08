import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Entry extends Component {

	static PropTypes = {
		entries: PropTypes.array.isRequired,
		onRemove: PropTypes.array.isRequired
	}



	render() {
		return (
				<li>
					{this.props.entry}
					<a className="remove" onClick={this.props.onRemove}> x </a>
				</li>
		)
	}

}


export default Entry