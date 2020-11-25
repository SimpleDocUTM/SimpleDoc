import React from "react";
import { Button, RadioGroup, FormLabel, FormControl } from "@material-ui/core";
import QuizOptions from "./MultipleChoiceOptions";
import PropTypes from "prop-types";
import { useRef } from "react";
import SimpleDocRest from "../api/SimpleDocRest";


class MultipleChoiceQuestion extends React.Component {
    constructor(props) {
        super(props);

        // Set default selected quiz option to nothing.
        this.state = { selected: undefined, isCorrect: undefined };
    }

    onOptionChange = (event, value) => {
        this.setState({ selected: parseInt(value) });
    };


    onSubmit = (event) => {
        event.preventDefault();
        SimpleDocRest.post(`/quizzes/save-answer/`, {
            question: this.props.questionId,
            option: this.state.selected,
        })
            .then((result) => {
                this.setState({ isCorrect: result.data.is_correct });
            })
            .catch((error) => {
                console.log(error);
            });

    };


    render() {
        const { question, options } = this.props;
        const { selected, isCorrect } = this.state;



        // this object will query the id to get the question text
        return (
            <form onSubmit={this.onSubmit}>
                <p>

                </p>
                <FormLabel component="legend" color="primary">
                    {question}
                </FormLabel>
                <RadioGroup
                    aria-label={question}
                    value={parseInt(selected)}
                    onChange={this.onOptionChange}
                >
                    <QuizOptions options={options} isCorrect={isCorrect} />
                    {/* the question id would need to be past down, so it can do its own query */}
                </RadioGroup>
                <Button variant="contained" type="submit"  >
                    Submit
        </Button>
                <p>

                </p>
            </form>
        );
    }
}

MultipleChoiceQuestion.propTypes = {
    question: PropTypes.string,
    questionId: PropTypes.number,
    options: PropTypes.array,
};

export default MultipleChoiceQuestion;
