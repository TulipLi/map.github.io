/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import './App.css';
import React from 'react'
import {
	Switch,
	Route,
} from 'react-router-dom';
import HuSu from '../src/husu/HuSu'

function App() {
	return <Switch>
		<Route exact path="/"></Route>
		<Route path="/husu">
			<HuSu />
		</Route>
		<Route path="/test">
			<div>test</div>
		</Route>
	</Switch>
}

export default App;
