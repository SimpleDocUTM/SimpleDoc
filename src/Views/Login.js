import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class Login extends React.Component {
    Validation = async (e) => {
        this.props.history.push('/DocumentView')
    }
    render() {
        const inputStyle = { padding: "10px", margin: "5px" }
        return (<div>
            <Header />
            <NavBar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <form>
                    <input style={inputStyle} type="text" id="username" />
                    <input style={inputStyle} type="password" id="password" />
                    <input style={inputStyle} type="submit" onClick={this.Validation} />

                </form>
            </center>
        </div>
        );
    }
}



export default Login;
