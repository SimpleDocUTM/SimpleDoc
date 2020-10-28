import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreatePage from '../Components/CreatePage';
import '../mystyle.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#121212',
    
  },
  
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Concepts</Button>
          <Button color="inherit">Quizzes</Button>
          <Button color="inherit">Contribute</Button>
          <Button color="inherit">Help</Button>
          <CreatePage />
        </Toolbar>
      </AppBar>
    </div>
  );
}

