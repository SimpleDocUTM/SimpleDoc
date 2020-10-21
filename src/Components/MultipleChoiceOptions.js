import React from "react";
import { Radio, FormControlLabel, FormControl } from "@material-ui/core";
import PropTypes from "prop-types";

class MultipleChoiceOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: undefined,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isCorrect !== this.props.isCorrect) {
      this.setState({ isCorrect: this.props.isCorrect });
    }
  }

  render() {
    const { options } = this.props;
    const { isCorrect } = this.state;
    console.log(isCorrect);

    return (
      <FormControl component="fieldset">
        {options.map(({ id, text }) => (
          <FormControlLabel
            key={id}
            value={id}
            control={<Radio />}
            label={text}
          />
        ))}
        {isCorrect !== undefined && (
          <div>{isCorrect ? "Correct" : "Incorrect"}</div>
        )}
      </FormControl>
    );
  }
}

MultipleChoiceOptions.propTypes = {
  options: PropTypes.array,
};

export default MultipleChoiceOptions;
