import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ContributeButton from '../Components/Buttons/ContributeButton';
import QuizzesButton from '../Components/Buttons/QuizzesButton';
import HomeButton from '../Components/Buttons/HomeButton';
import HelpButton from '../Components/Buttons/HelpButton';
import ConceptsButton from '../Components/Buttons/ConceptsButton';
import Search from "../Components/Search";
import '../mystyle.module.css';

const mystyles = {
  color: "#121212",
  //backgroundColor: "#FFFFF",
  backgroundColor: "#629BDC",
  textAlign: "center",


};

export default function NavBar() {
  // const classes = useStyles();


  return (
    //<div style={mystyles} className={classes.root}>
    <div style={mystyles}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          {/* <HomeButton /> */}
          <ConceptsButton />
          <QuizzesButton />
          <ContributeButton />
          <HelpButton />
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}

