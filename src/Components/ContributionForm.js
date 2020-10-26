import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from "prop-types";
import SimpleDocRest from "../api/SimpleDocRest";
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';

const concepts108 = [
  {
    value: 'Boolean',
    label: 'Boolean',
  },
  {
    value: 'Function Design Recipe',
    label: 'Function Design Recipe',
  },
  {
    value: 'Strings: Index, slicing, Methods and Formatting',
    label: 'Strings: Index, slicing, Methods and Formatting',
  },
  {
    value: 'Condtionals',
    label: 'Condtionals',
  },
  {
    value: 'For loops and Nested For Loops',
    label: 'For loops and Nested For Loops',
  },
  {
    value: 'Lists and Nested Lists',
    label: 'Lists and Nested Lists',
  },
  {
    value: 'File Input and Output: Read and Write',
    label: 'File Input and Output: Read and Write',
  },
  {
    value: 'Tuples',
    label: 'Tuples',
  },
  {
    value: 'Dictionaries',
    label: 'Dictionaries',
  },
  {
    value: 'Nested Dictionaries',
    label: 'Nested Dictionaries',
  },
  {
    value: 'Insertion Sort, Selection Sort, Bubble sort and Merge Sort',
    label: 'Insertion Sort, Selection Sort, Bubble sort and Merge Sort',
  },
  {
    value: 'Timing and Complexity',
    label: 'Timing and Complexity',
  },
  {
    value: 'Object Oriented Programming in Python',
    label: 'Object Oriented Programming in Python',
  },
];

const concepts148 = [
  {
    value: 'Python Memory Model',
    label: 'Python Memory Model',
  },
  {
    value: 'Object Oriented Programming ',
    label: 'Object Oriented Programming ',
  },
  {
    value: 'Inheritance and abstractions',
    label: 'Inheritance and abstractions',
  },
  {
    value: 'Stacks and Queues: Priority queues and First in first out',
    label: 'Stacks and Queues: Priority queues and First in first out',
  },
  {
    value: 'Complexity and Big-Oh',
    label: 'Complexity and Big-Oh',
  },
  {
    value: 'Linked Lists',
    label: 'Linked Lists',
  },
  {
    value: 'Recursion',
    label: 'Recursion',
  },
  {
    value: 'Trees and Binary Trees',
    label: 'Trees and Binary Trees',
  },
  {
    value: 'Binary Search Trees',
    label: 'Binary Search Trees',
  },
  {
    value: 'List Comprehensions',
    label: 'List Comprehensions',
  },
];


class ContributionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conceptname: '',
      documentname: '',
      definition: '',
      description: '',
      contributorName: '',
      contributorUtorid: '',
      contributorStdNum: '',
      contributorEmail: '',
      exampleDescription1: '',
      example1: '',
      exampleDescription2: '',
      example2: '',
      exampleDescription3: '',
      example3: '',
    }
  }

  handleOnConceptChange = (event) => {
    this.setState({ conceptname: event.target.value });
  };

  handleOnDocNameChange = (event) => {
    this.setState({ documentname: event.target.value });
  };

  handleOnDefChange(event) {
    this.setState({ definition: event.target.value });
  };

  handleOnDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleOnContributorNameChange = (event) => {
    this.setState({ contributorName: event.target.value });
  };

  handleOnContributorUtoridChange = (event) => {
    this.setState({ contributorUtorid: event.target.value });
  };

  handleOnContributorStdNumChange = (event) => {
    this.setState({ contributorStdNum: event.target.value });
  };

  handleOnContributorEmailChange = (event) => {
    this.setState({ contributorEmail: event.target.value });
  };

  handleOnExDescription1 = (event) => {
    this.setState({ exampleDescription1: event.target.value });
  };

  handleOnEx1 = (event) => {
    this.setState({ example1: event.target.value });
  };

  handleOnExDescription2 = (event) => {
    this.setState({ exampleDescription2: event.target.value });
  };

  handleOnEx2 = (event) => {
    this.setState({ example2: event.target.value });
  };

  handleOnExDescription3 = (event) => {
    this.setState({ exampleDescription3: event.target.value });
  };

  handleOnEx3 = (event) => {
    this.setState({ example3: event.target.value });
  };

  handleOnSubmit(event) {
    event.preventDefault();

    SimpleDocRest.post(`/documents/contribution/`, {
      conceptname: this.state.conceptname,
      documentname: this.state.documentname,
      definition: this.state.definition,
      description: this.state.description,
      contributorName: this.state.contributorName,
      contributorUtorid: this.state.contributorUtorid,
      contributorStdNum: this.state.contributorStdNum,
      contributorEmail: this.state.contributorEmail,
      exampleDescription1: this.state.exampleDescription1,
      exampleDescription2: this.state.exampleDescription2,
      exampleDescription3: this.state.exampleDescription3,
      example1: this.state.example1,
      example2: this.state.example2,
      example3: this.state.example3
    })
      .then(function (response) {
        console.log(response);
      }).then(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      // , marginInlineStart: "33.5ch"  , marginInlineStart: "50ch" ,width: 80ch
      <div>
        <form noValidate autoComplete="off" onSubmit={this.handleOnSubmit.bind(this)} >
          <h2 style={{ marginTop: "30px", marginInlineStart: "3ch" }}>
            Personal Information
                    </h2>
          <div>
            <TextField //name
              style={{ width: "40ch", marginTop: "5px", marginInlineStart: "3ch" }}
              id="name"
              required
              label="Name"
              multiline
              value={this.state.contributorName}
              onChange={this.handleOnContributorNameChange.bind(this)}
              //placeholder="Enter your name"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <AccountCircle style={{ marginBottom: "14px" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField //Utorid
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Utorid"
              multiline
              value={this.state.contributorUtorid}
              onChange={this.handleOnContributorUtoridChange.bind(this)}
              //placeholder="Enter your Utorid"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <AccountCircle style={{ marginBottom: "14px" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Student Number"
              multiline
              value={this.state.contributorStdNum}
              onChange={this.handleOnContributorStdNumChange.bind(this)}
              //placeholder="Enter your student number"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <AccountCircle style={{ marginBottom: "14px" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="UofT Email"
              multiline
              value={this.state.contributorEmail}
              onChange={this.handleOnContributorEmailChange.bind(this)}
              //placeholder="Enter your email (UofT email preferred)"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <AccountCircle style={{ marginBottom: "14px" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <h2 style={{ marginTop: "40px", marginInlineStart: "3ch" }}>
            Create the Documentation
                  </h2>
          <div>
            <TextField
              style={{ width: "40ch", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Concept Name"
              select
              onChange={this.handleOnConceptChange.bind(this)}
              value={this.state.conceptname}

              helperText="Please select one concept"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader>CSC108</ListSubheader>
              {concepts108.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              <ListSubheader>CSC148</ListSubheader>
              {concepts148.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              //id="filled-multiline-static"
              required
              label="Documentation Name"
              multiline
              value={this.state.documentname}
              onChange={this.handleOnDocNameChange.bind(this)}
              placeholder="Enter the Documentation Name"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Documentation Definition"
              multiline
              value={this.state.definition}
              onChange={this.handleOnDefChange.bind(this)}
              rows={6}
              placeholder="Enter the definition"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Documentation Description"
              multiline
              value={this.state.description}
              onChange={this.handleOnDescriptionChange.bind(this)}
              rows={6}
              placeholder="Enter the description"
              variant="filled"
            />
          </div>
          <h2 style={{ marginTop: "40px", marginInlineStart: "3ch" }}>
            Examples
                  </h2>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "5px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Example1 Description"
              multiline
              value={this.state.exampleDescription1}
              onChange={this.handleOnExDescription1.bind(this)}
              rows={4}
              placeholder="Please describe example one"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Example1"
              multiline
              value={this.state.example1}
              onChange={this.handleOnEx1.bind(this)}
              rows={6}
              placeholder="Enter example one"
              helperText="Please type in code snippet(with indentation)"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "40px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Example2 Description"
              multiline
              value={this.state.exampleDescription2}
              onChange={this.handleOnExDescription2.bind(this)}
              rows={4}
              placeholder="Please describe example two"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              required
              label="Example2"
              multiline
              value={this.state.example2}
              onChange={this.handleOnEx2.bind(this)}
              rows={6}
              placeholder="Enter example two"
              helperText="Please type in code snippet(with indentation)"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "40px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              label="Example3 Description"
              multiline
              value={this.state.exampleDescription3}
              onChange={this.handleOnExDescription3.bind(this)}
              rows={4}
              placeholder="Please describe example three"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              style={{ width: "40ch", marginTop: "20px", marginInlineStart: "3ch" }}
              id="filled-multiline-static"
              label="Example3"
              multiline
              value={this.state.example3}
              onChange={this.handleOnEx3.bind(this)}
              rows={6}
              placeholder="Enter example three"
              helperText="Please type in code snippet(with indentation)"
              variant="filled"
            />
          </div>

          <Button style={{ marginTop: "30px", marginLeft: "3ch" }} variant="contained" color="primary" type="submit" >Submit</Button>
        </form>
      </div >
      //  marginLeft: "50ch", 
    );
  }

}


ContributionForm.propTypes = {
  conceptname: PropTypes.string,
  documentname: PropTypes.string,
  definition: PropTypes.string,
  description: PropTypes.string,
  contributorName: PropTypes.string,
  contributorUtorid: PropTypes.string,
  contributorStdNum: PropTypes.string,
  contributorEmail: PropTypes.string,
  exampleDescription1: PropTypes.string,
  example1: PropTypes.string,
  exampleDescription2: PropTypes.string,
  example2: PropTypes.string,
  exampleDescription3: PropTypes.string,
  example3: PropTypes.string,
};

export default ContributionForm
