//import emailjs from "emailjs.com"
import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';




class ContactForm extends React.Component{
	render(){

		return(
			<form noValidate autoComplete="off">
				<div><TextField id="outlined-basic" label="First Name" variant="outlined" /></div>
				<div><TextField id="outlined-basic" label="Last Name" variant="outlined" /></div>
				<div><TextField id="outlined-basic" label="Email Address" variant="outlined" /></div>
				<div><TextField id="outlined-basic" label="Your Message" variant="outlined" /></div>
			</form>
		)
	}
	
	
}

export default ContactForm



