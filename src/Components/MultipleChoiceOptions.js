import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


class QuizOptions extends React.Component{
    render(){
        return (
            
            <FormControl component="fieldset">  
            {
                this.props.options.map(
                    (option) =>(
                    < FormControlLabel value={option} control={<Radio />} label={option} />
                    )
                )
            }
            </FormControl>
                
        );
    }
}

export default QuizOptions;