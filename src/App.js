import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './Views/Login';

class App extends React.Component{
	render(){
		return(
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Login}/>;
					</Switch>
				</BrowserRouter>
			</div>)
		 
	}
}
export default App; 
