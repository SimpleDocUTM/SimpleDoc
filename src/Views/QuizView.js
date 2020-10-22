import React from "react";
import PropTypes from "prop-types";

import MultipleChoiceQuestion from "../Components/MultipleChoiceQuestion";
import SimpleDocRest from "../api/SimpleDocRest";

class QuizView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quizTitle: "", quizId: props.quizId, quizQuestions: [] };
  }

  fetchQuiz = async () => {
    SimpleDocRest.get(`/quizzes/${this.state.quizId}/`)
      .then((result) => {
        console.log(result);
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
    const { quizQuestions, quizTitle } = this.state;
    return (
      <div>
        <h1>{quizTitle}</h1>
        {quizQuestions.map(({ question, quizoption_set, id }) => (
          <MultipleChoiceQuestion
            key={id}
            question={question}
            questionId={id}
            options={quizoption_set}
          />
        ))}
      </div>
    );
  }
}

QuizView.propTypes = {
  quizId: PropTypes.number,
};

export default QuizView;
