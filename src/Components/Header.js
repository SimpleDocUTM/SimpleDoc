import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Contribute from '../Components/Buttons/Contribute';
import LoginButton from '../Components/Buttons/LoginButton';
import '../mystyle.module.css';

const mystyle = {
  color: "#121212",
  backgroundColor: "#e5e5e5",
  padding: "10px",
  fontFamily: "Roboto",
  textAlign: "center",
  borderBottom: "2px groove #000000",
  display: "flex",
};

export default function Header() {
  return (
    <div style={mystyle} >
      <h1 style={{ flexGrow: "1" }}>Simple Doc</h1>
      <LoginButton />
    </div >
  )
}

