import React from "react";
import { Button, RadioGroup, FormLabel } from "@material-ui/core";
import QuizOptions from "./MultipleChoiceOptions";
import PropTypes from "prop-types";

class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);

    // Set default selected quiz option to nothing.
    this.state = { selected: null };
  }

  onOptionChange = (event, value) => {
    this.setState({ selected: value });
  };

  onSubmit = (event, value) => {
    console.log(value);
  };

  render() {
    const { question, options } = this.props;
    // this object will query the id to get the question text
    return (
      <div>
        <FormLabel component="legend" color="primary">
          {question}
        </FormLabel>
        <RadioGroup
          aria-label={question}
          value={parseInt(this.state.selected)}
          onChange={this.onOptionChange}
        >
          <QuizOptions options={options} />
          {/* the question id would need to be past down, so it can do its own query */}
        </RadioGroup>
        <Button variant="contained" onClick={this.onSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.string,
  questionId: PropTypes.number,
  options: PropTypes.array,
};

export default MultipleChoiceQuestion;
