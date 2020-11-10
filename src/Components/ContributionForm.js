import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from "prop-types";
import SimpleDocRest from "../api/SimpleDocRest";
import ListSubheader from '@material-ui/core/ListSubheader';
import AlertDialog from "./AlertDialog";



class ContributionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      list108: [],
      list148: [],
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

  componentDidMount() {
    console.log("fetching concepts")
    SimpleDocRest.get(`concepts/`)
      .then((result) => {
        console.log(result.data)
        this.setState(() => {
          return {
            data: result.data
          };
        });
        for (const concept of this.state.data) {
          console.log(concept)
          if (concept.category == "CSC108") {
            this.setState((state) => ( { list108: [...state.list108, concept] } ))
          } else {
            this.setState((state) => ( { list148: [...state.list148, concept] } ))
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
              {this.state.list108.map((concept) => (
                <MenuItem key={concept.name} value={concept.name}>
                  {concept.name}
                </MenuItem>

              ))}
              <ListSubheader>CSC148</ListSubheader>
              {this.state.list148.map((concept) => (
                <MenuItem key={concept.name} value={concept.name}>
                  {concept.name}
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

          <AlertDialog />
        </form>
      </div >
      //  marginLeft: "50ch", 
    );
  }

}

// <Button style={{ marginTop: "30px", marginLeft: "3ch" }} variant="contained" color="primary" type="submit" >Submit</Button>

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
