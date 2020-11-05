import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";


class QuizCard extends React.Component{
	constructor(props) {
        super(props);
	}
	
    render(){
		const mystyle = {
			cardcomponent:{
				minWidth: 275,
			},
			cardcontent:{
				fontSize: 14,
			},
		}
		const { title} = this.props;
        return(
            <div>
                <Card style={mystyle.cardcomponent}>
      				     <CardContent style={mystyle.cardcontent}>
        			                {this.props.title}
                	            </CardContent>
					<CardActions>
        				<Button size="small">Take Quiz</Button>
      				</CardActions>
                </Card>
            </div>
        );
    }
}

QuizCard.propTypes = {
    title: PropTypes.string,
};

export default QuizCard;

