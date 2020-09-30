import React from 'react';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import QuizOptions from './MultipleChoiceOptions';



class Quiz extends React.Component{
    render(){
        // this object will query the id to get the question text 
        return (
        <div>
            <FormLabel component="legend" color = 'primary'>{this.props.questionid}</FormLabel>
                <RadioGroup aria-label="placeHolder2" name="placeHolder2" value='1' onChange={1}>
                    <QuizOptions options={this.props.options}/> 
                    {/* the question id would need to be past down, so it can do its own query */}
                </RadioGroup>
            <Button variant="contained" onClick={1} >Submit</Button>
        </div>
        );
    }
}


    
    
    


export default Quiz;