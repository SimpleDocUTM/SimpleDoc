import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Container from '@material-ui/core/Container';
import styles from '../mystyle.module.css';
import SimpleDocRest from "../api/SimpleDocRest";
import QuizCard from '../Components/QuizCard';

class QuizzesPage extends React.Component {
    constructor(props) {     //props = arguments, states = attributes
        super(props);
        this.state = { quizzes:[] };
    }

    fetchQuiz = async () => {
        SimpleDocRest.get(`/quizzes/`)
            .then((result) => {
                this.setState({
                    quizTitle: result.data,
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
        const { quizzes} = this.state;
        
	return (
            <div>
		<Header />
                <NavBar />
                {/* place holder */}
                <Container maxWidth="lg">
			<h1 className={styles.header}>
                    	</h1>
			{quizzes.map(({ title}) => (
				<QuizCard title={title}/>
		        ))}
		</Container>
            </div>


        )
    };

}

export default QuizzesPage



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
