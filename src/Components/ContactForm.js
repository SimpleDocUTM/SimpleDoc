//import emailjs from "emailjs.com"
import React from 'react'
import FormControl from '@material-ui/core/FormControl';

export default function ContactForm(){
	return(
		<FormControl>
  			<InputLabel htmlFor="my-input">Email address</InputLabel>
  			<Input id="my-input" aria-describedby="my-helper-text" />
  			<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
		</FormControl>	
	)


}
