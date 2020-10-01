import React from 'react';
//import ReactDOM from 'react-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import { makeStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import '../App.css';

//const textStyles = makeStyles( {
//        root: {
//                minWidth: 275,
//        },
//        text: {
//                fontSize: 14
//        },
//});

class TextComponent extends React.Component{
        render(){
		const mystyle = {
			cardcomponent:{
				minWidth: 275,
			},
			cardcontent:{
				fontSize: 14,
			},
			
                 
                }
                return(
                        <div>
                                <Card style={mystyle.cardcomponent}>
                                        <CardContent style={mystyle.cardcontent}>
                                                        {this.props.text}
                                        </CardContent>
                                </Card>
                        </div>
                );
        }
}

export default TextComponent;

