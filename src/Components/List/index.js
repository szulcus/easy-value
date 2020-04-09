// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ListComponent = styled.div`
	
`

class List extends Component {
	render() {
		return (
			<ListComponent>
				{this.props.match.params.name} List
				<ul>
					<li>
						<Link to='/'>{this.props.match.params.name} item 1</Link>
					</li>
				</ul>
			</ListComponent>
		);
	}
}

export default List