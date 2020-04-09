// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// ICONS
import triangle from '../../Images/geometry/triangle.svg'
import triangleBorder from '../../Images/geometry/triangle-border.svg'
import square from '../../Images/geometry/square.svg'
import squareBorder from '../../Images/geometry/square-border.svg'
import hexagon from '../../Images/geometry/hexagon.svg'
import hexagonBorder from '../../Images/geometry/hexagon-border.svg'
import circle from '../../Images/geometry/circle.svg'
import circleBorder from '../../Images/geometry/circle-border.svg'
import { Link } from 'react-router-dom'

const GeometrySite = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
`
const Title = styled.h1`

`
const Figures = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`
const Figure = styled(Link)`
	position: relative;
	width: 200px;
	height: 200px;
	margin: 20px;
`
const FugureElement = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s ease;
	${props =>
		props.hide &&
		css`
			opacity: 0;
			:hover {
				cursor: pointer;
				opacity: 1
			}
		`
	};
`

class GeometryApp extends Component {
	render() {
		return (
			<GeometrySite>
				<Title>Wybierz figurę:</Title>
				<Figures>
					<Figure to="/geometria/trojkat">
						<FugureElement src={triangleBorder} />
						<FugureElement hide src={triangle} />
					</Figure>
					<Figure to="/geometria/kwadrat">
						<FugureElement src={squareBorder} />
						<FugureElement hide src={square} />
					</Figure>
					<Figure to="/geometria/szesciokat">
						<FugureElement src={hexagonBorder} />
						<FugureElement hide src={hexagon} />
					</Figure>
					<Figure to="/geometria/kolo">
						<FugureElement src={circleBorder} />
						<FugureElement hide src={circle} />
					</Figure>
				</Figures>
			</GeometrySite>
		);
	}
}

export default GeometryApp