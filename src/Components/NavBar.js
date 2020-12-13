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
import './navigation.css'

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
    <div className="nav">
      <AppBar position="static" className={"navbar"}>
        <Toolbar className={"navbar"}>
          <ConceptsButton className={"button"} />
          <QuizzesButton className={"button"} />
          <ContributeButton className={"button"} />
          <HelpButton className={"button"} />
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}

