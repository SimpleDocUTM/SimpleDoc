import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';

import styles from '../mystyle.module.css';
import SimpleDocRest from "../api/SimpleDocRest";
import QuizCard from '../Components/QuizCard';


class QuizzesPage extends React.Component {
    constructor(props) {     //props = arguments, states = attributes
        super(props);
        this.state = { quizzes: [] };
    }

    fetchQuiz = async () => {
        SimpleDocRest.get(`/quizzes/`)
            .then((result) => {
                console.log("quizzes")
                console.log(result.data)
                this.setState({
                    quizzes: result.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    componentDidMount() {
        this.fetchQuiz();
    }

    render() {
        const { quizzes } = this.state;
        console.log(quizzes)

        return (
            <div>
                <Header />
                <NavBar />
                {/* place holder */}
                <Container maxWidth="lg">
                    <h1 className={styles.header}>
                    </h1>
                    {quizzes.map(({ title, id }) => (  //need to map ids
                        <QuizCard title={title} id={id} />
                    ))}
                </Container>
            </div>


        )
    };

}

export default withRouter(QuizzesPage)



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
