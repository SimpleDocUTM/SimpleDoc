import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';

import '../App.css';


class QuizCard extends React.Component {
	render() {
		const mystyle = {
			cardcomponent: {
				minWidth: 275,
			},
			cardcontent: {
				fontSize: 14,
			},
		}
		const { title, id } = this.props;
		console.log(id)
		return (
			<div>
				<Card style={mystyle.cardcomponent}>
					<CardContent style={mystyle.cardcontent}>
						{this.props.title}
					</CardContent>
					<CardActions>
						<Button size="small" onClick={() => this.props.history.push(`/quiz/${id}`)}>Take Quiz</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}

QuizCard.propTypes = {
	title: PropTypes.string,
};

export default withRouter(QuizCard);

