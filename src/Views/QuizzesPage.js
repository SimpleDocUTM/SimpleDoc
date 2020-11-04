import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Container from '@material-ui/core/Container';
import CodeComponent from '../Components/CodeComponent';
import styles from '../mystyle.module.css';
import SimpleDocRest from "../api/SimpleDocRest";

class QuizzesPage extends React.Component {



    render() {
        return (
            <div>
		<Header />
                <NavBar />
                {/* place holder */}
                <Container maxWidth="lg">
			<h1 className={styles.header}>
                        CSC108
                    	</h1>
			<h1 className={styles.header}>
                        CSC148 
                        </h1>

		</Container>
            </div>


        )
    };

}

export default QuizzesPage



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
