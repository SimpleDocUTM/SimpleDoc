import React from 'react';
import NavBar from '../Components/NavBar';
//import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
//import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';
//import { makeStyles } from '@material-ui/core/styles';
import ContributionForm from '../Components/ContributionForm'
import Header from '../Components/Header';

class ContributionPage extends React.Component {

    render(){
        return (
            <div>
		<Header />
                <NavBar />
                <ContributionForm style={{width: "70ch"}}/>
            </div>
        );
    }
    
}

export default ContributionPage
