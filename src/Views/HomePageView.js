import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CSC108Button from '../Components/Buttons/CSC108Button';
import CSC148Button from '../Components/Buttons/CSC148Button';
import TextComponent from '../Components/textComponent';
import Container from '@material-ui/core/Container';
import styles from '../mystyle.module.css';
import SimpleDocRest from "../api/SimpleDocRest";

class HomePageView extends React.Component {

    render() {
        return (
            <div>
		<Header />
                <NavBar />
                <Container maxWidth="lg">
					<CSC108Button />
					<CSC148Button />
                </Container>

            </div>


        )
    };

}

export default HomePageView



