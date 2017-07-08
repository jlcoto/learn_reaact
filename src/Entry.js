import React from 'react'



function Entry(props) {
		return (
				<li>
					{props.entry}
					<button className="remove" onClick={() => props.onClick()}> x </button>
				</li>
		)

}


export default Entry