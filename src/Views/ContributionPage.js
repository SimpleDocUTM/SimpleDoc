import React from 'react';
import ButtonAppBar from '../Components/NavBar';
//import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
//import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';
//import { makeStyles } from '@material-ui/core/styles';
import ContributionForm from '../Components/ContributionForm'

class ContributionPage extends React.Component {

    render(){
        return (
            <div>
                <ButtonAppBar />
                <ContributionForm style={{width: "70ch"}}/>
            </div>
        );
    }
    
}

export default ContributionPage
