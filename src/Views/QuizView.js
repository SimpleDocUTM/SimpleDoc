import React from "react";
import PropTypes from "prop-types";
import NavBar from "../Components/NavBar";
import MultipleChoiceQuestion from "../Components/MultipleChoiceQuestion";
import SimpleDocRest from "../api/SimpleDocRest";
import Container from "@material-ui/core/Container";
import Header from "../Components/Header";
import Loading from "../Components/Loading";

class QuizView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizTitle: "",
      quizId: props.quizId,
      quizQuestions: [],
      isLoading: true,
    };
  }

  fetchQuiz = async () => {
    console.log(this.props);
    SimpleDocRest.get(`/quizzes/${this.props.match.params.id}/`)
      .then((result) => {
        this.setState({
          quizTitle: result.data.title,
          quizQuestions: result.data.quizquestion_set,
          isLoading: false,
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
    const { quizQuestions, quizId, isLoading } = this.state;
    return (
      <div>
        <Header />
        <NavBar />
        <Container maxWidth="lg">
          {isLoading ? (
            <Loading />
          ) : (
            quizQuestions.map(({ question, quizoption_set, id }) => (
              <MultipleChoiceQuestion
                key={id}
                question={question}
                questionId={id}
                options={quizoption_set}
              />
            ))
          )}
        </Container>
      </div>
    );
  }
}

QuizView.propTypes = {
  quizId: PropTypes.number,
};

export default QuizView;
