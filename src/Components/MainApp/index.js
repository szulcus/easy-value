// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {db} from '../../Config/firebase'
// import { Link as Linkk, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// COMPONENTS
import Welcome from './components/Welcome'
// IMAGES
import logo from '../../Images/logo.png'
import geometryIcon from '../../Images/geometry/icon.svg'
import functionIcon from '../../Images/functions/icon.svg'

const AppComponent = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0;
	}
`
const List = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

`
const ChoiseTitle = styled.h2`
	font-size: 30px;
	margin: 0;
	padding: 20px;
`
const Choise = styled.div`
	display: flex;
`
const Go = styled(Link)`
	text-decoration: none;
	color: var(--color-primary);
	display: flex;
	flex-direction: column;
	text-align: center;
	transition: all 0.2s ease;
	:hover {
		opacity: 0.5;
	}
`
const Icon = styled.img`
	width: 100px;
	height: 100px;
	margin: 10px 20px;
`

class App extends Component {
	state = {
		isScrolled: false,
		stats: {
			views: "-",
			average: "-",
			users: "-"
		}
	}
	componentDidMount() {
		db.collection('apps').doc('easy-value').get().then(snap => {
			db.collection('apps').doc('easy-value').update({
				'stats.views': snap.data().stats.views + 1
			})
		})
		db.collection('apps').doc('easy-value').onSnapshot(snap => {
			// db.collection('apps').doc('easy-value').update({
			// 	'stats.views': snap.data().stats.views + 1
			// })
			let allStars = 0;
			let allOpinions = 0;
			snap.data().stats.opinions.forEach(({stars}) => {
				allStars += stars
				allOpinions += 1
			})
			const average = allStars / allOpinions
			this.setState(prevState => ({
				stats: {
					...prevState.stats,
					average: average.toFixed(1),
					views: snap.data().stats.views.toString()
				}
			}));
		})
		db.collection('users').onSnapshot(snaps => {
			let users = 0;
			snaps.forEach(() => users += 1)
			this.setState(prevState => ({
				stats: {
					...prevState.stats,
					users: users.toString()
				}
			}));
		})
	}
	scrollDown = () => {
		document.getElementById('list').scrollIntoView({behavior: 'smooth', block: 'start'})
	}
	render() {
		return (
			<AppComponent id="app">
				<Welcome logo={logo} scroll={this.scrollDown} stats={this.state.stats} />
				<List id="list">
					<ChoiseTitle>Wybierz dział</ChoiseTitle>
					<Choise>
						<Go to="/geometria">
							<Icon src={geometryIcon} />
							Geometria
						</Go>
						<Go to="/funkcje">
							<Icon src={functionIcon} />
							Funkcje
						</Go>
					</Choise>
				</List>
			</AppComponent>
		);
	}
}

export default App