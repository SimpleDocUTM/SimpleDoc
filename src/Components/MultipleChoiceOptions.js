import React from "react";
import { Radio, FormControlLabel, FormControl } from "@material-ui/core";
import PropTypes from "prop-types";

class MultipleChoiceOptions extends React.Component {
  render() {
    return (
      <FormControl component="fieldset">
        {this.props.options.map(({ id, text }) => (
          <FormControlLabel
            key={id}
            value={id}
            control={<Radio />}
            label={text}
          />
        ))}
      </FormControl>
    );
  }
}

MultipleChoiceOptions.propTypes = {
  options: PropTypes.array,
};

export default MultipleChoiceOptions;
