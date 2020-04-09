// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// ICONS
import linear from '../../Images/functions/linear.svg'
import quadratic from '../../Images/functions/quadratic.svg'
import { Link } from 'react-router-dom'

const AlgebrySite = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
`
const Title = styled.h1`

`
const Menu = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`
const MenuElement = styled(Link)`
	position: relative;
	width: 200px;
	height: 200px;
	margin: 20px;
`

class AlgebryApp extends Component {
	render() {
		return (
			<AlgebrySite>
				<Title>Wybierz funkcję:</Title>
				<Menu>
					<MenuElement src={linear} />
				</Menu>
				<Menu>
					<MenuElement src={quadratic} />
				</Menu>
			</AlgebrySite>
		);
	}
}

export default AlgebryApp