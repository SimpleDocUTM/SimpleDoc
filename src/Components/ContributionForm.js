import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import SimpleDocRest from "../api/SimpleDocRest";

const concepts = [
    {
      value: 'List',
      label: 'List',
    },
    {
      value: 'Sorting algorithm',
      label: 'Sorting algorithm',
    },
    {
      value: 'Recursion',
      label: 'Recursion',
    },
  ];


class ContributionForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { conceptname: 'choose one concept', documentname: '', definition: '', description: '' }
    }

    handleOnConceptChange = (event) => {
        this.setState({ conceptname: event.target.value});
    };

    handleOnDocNameChange = (event) =>{
        this.setState({ documentname: event.target.value});
    };

    handleOnDefChange(event) {
        this.setState({ definition: event.target.value });
    };
    
    handleOnDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    };
    
    handleOnSubmit(event) {
        event.preventDefault();
    
        SimpleDocRest.post(`/documents/contribution/`, {
            conceptname: this.state.conceptname,
            documentname: this.state.documentname,
            definition: this.state.definition,
            description: this.state.description
        })
        .then(function(response) {
            console.log(response);
        }).then(function(error) {
            console.log(error);
        });
    };

    render(){
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.handleOnSubmit.bind(this)}>
                  <div>
                    <TextField
                        style={{padding: "15px", width: "50ch"}}
                        id="standard-select-currency"
                        select
                        onChange={this.handleOnConceptChange.bind(this)}
                        value={this.state.conceptname}
                        
                        helperText="Please select one concept"
                    >
                        {concepts.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                        style={{padding: "15px", width: "50ch"}}
                        id="outlined-basic"
                        multiline
                        value={this.state.documentname}
                        onChange={this.handleOnDocNameChange.bind(this)}
                        placeholder="Enter the Documentation Name"
                        variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                        style={{padding: "15px", width: "50ch"}}
                        id="outlined-multiline-static"
                        multiline
                        value={this.state.definition}
                        onChange={this.handleOnDefChange.bind(this)}
                        rows={4}
                        placeholder="Enter the definition"
                        variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                        style={{padding: "15px", width: "50ch"}}
                        id="outlined-multiline-static"
                        multiline
                        value={this.state.description}
                        onChange={this.handleOnDescriptionChange.bind(this)}
                        rows={4}
                        placeholder="Enter the description"
                        variant="outlined"
                    />
                  </div>

                    <Button style={{ marginLeft: "15px" }} variant="contained" color="primary" type="submit" >Submit</Button>
                </form>
            </div>
        );
    }
    
}
ContributionForm.propTypes = {
    conceptname: PropTypes.string,
    documentname: PropTypes.string,
    definition: PropTypes.string,
    description: PropTypes.string,
  };

export default ContributionForm
