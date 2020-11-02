import React from "react";
import PropTypes from "prop-types";
import NavBar from '../Components/NavBar';
import MultipleChoiceQuestion from "../Components/MultipleChoiceQuestion";
import SimpleDocRest from "../api/SimpleDocRest";
import Container from '@material-ui/core/Container';
import Header from '../Components/Header';

class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quizTitle: "", quizId: props.quizId, quizQuestions: [] };
    }

    fetchQuiz = async () => {
        SimpleDocRest.get(`/quizzes/${this.state.quizId}/`)
            .then((result) => {
                this.setState({
                    quizTitle: result.data.title,
                    quizQuestions: result.data.quizquestion_set,
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
        const { quizQuestions, quizId } = this.state;
        return (
            <div>
                <Header />
		<NavBar />
                <Container maxWidth="lg">
                    {quizQuestions.map(({ question, quizoption_set, id }) => (
                        <MultipleChoiceQuestion
                            key={id}
                            question={question}
                            questionId={id}
                            options={quizoption_set}
                        />
                    ))}

                </Container>

            </div>
        );
    }
}

QuizView.propTypes = {
    quizId: PropTypes.number,
};

export default QuizView;
