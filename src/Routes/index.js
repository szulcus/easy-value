// BASIC
import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// COMPONENTS
import MainPage from '../Components/MainApp'
import List from '../Components/List'
import GeometryList from '../Components/Geometry'
import FunctionsList from '../Components/Functions'

class index extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={MainPage}/>
					<Route path="/:name" exact component={List}/>
					<Route path="/geometria/:element" exact component={GeometryList}/>
					<Route path="/funkcje/:element" exact component={FunctionsList}/>
				</Switch>
			</Router>
		);
	}
}

export default index