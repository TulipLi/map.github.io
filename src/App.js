/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import './App.css';
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import HuSu from '../src/husu/HuSu'

function App() {
	return <Router>
		<div>
			<Switch>
				<Route exact path="/">
					<div>你好～</div>
				</Route>
				<Route path="/husu">
					<HuSu />
				</Route>
				<Route path="/map.github.io/husu">
					<HuSu />
				</Route>
				<Route path="/map.github.io">
					<div>你好～</div>
				</Route>
				<Route path="/test">
					<div>test</div>
				</Route>
			</Switch>
		</div>
	</Router>
}

export default App;
