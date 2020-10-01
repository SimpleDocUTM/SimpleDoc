import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class Login extends React.Component{
    Validation = async (e) =>{
        this.props.history.push('/DocumentView')
    }
    render(){
        return(<div>
                <form>
                    <input type="text" id="username"/>
                    <input type="password" id="password"/>
                    <input type="submit" onClick={this.Validation}/>
                    
                </form>
        </div>
            );
    }
}



export default Login;
