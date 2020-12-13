import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../mystyle.module.css';
import "./navigation.css"

export default function Header() {
  return (
    <div className={"head"} >
      <h1 className={"title"}>Simple Doc</h1>
    </div >
  )
}

