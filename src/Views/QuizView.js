import React from "react";
import PropTypes from "prop-types";
import ButtonAppBar from '../Components/SampleNav';
import MultipleChoiceQuestion from "../Components/MultipleChoiceQuestion";
import SimpleDocRest from "../api/SimpleDocRest";
import Container from '@material-ui/core/Container';

class QuizView extends React.Component {
    constructor(props) {
        super(props);

        this.state = { quizTitle: "", quizId: props.quizId, quizQuestions: [] };
    }



    fetchQuiz = async () => {
        SimpleDocRest.get(`/quizzes/1/`)
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
                <ButtonAppBar />
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
