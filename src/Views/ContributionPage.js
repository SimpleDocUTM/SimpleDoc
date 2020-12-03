import React from 'react';
import NavBar from '../Components/NavBar';
//import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
//import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from '../mystyle.module.css';
import TextComponent from '../Components/textComponent';
import ContributionForm from '../Components/ContributionForm'
import Header from '../Components/Header';

class ContributionPage extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <TextComponent className={styles.paragraph} text='By submitting, you are giving authorization to
                    publish your submission on our site as well as use the data for research and enhancement purposes. 
                    If you have any question, please submit a query in the feedback form.' />
                <ContributionForm style={{ width: "70ch" }} />
            </div>
        );
    }

}

export default ContributionPage
