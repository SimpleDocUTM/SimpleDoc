import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Login extends React.Component{

    render() {
        return (
			<div>
				<form>
					<input type="text"/>
					<input type="password"/>
					<input type="submit"/>
				</form>
			</div>

	);
    }  	
}
export default Login;
