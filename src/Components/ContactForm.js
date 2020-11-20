import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import emailjs from "emailjs-com"
import Button from '@material-ui/core/Button';
//import{ init } from 'emailjs-com';
//init("user_f5FwnjehDRqmtbwbNaUVN");

//npm install emailjs-com --save


export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_2qmb0zp', 'template_g5z4gp8', e.target, 'user_f5FwnjehDRqmtbwbNaUVN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        //	<form noValidate autoComplete="off" onSubmit={sendEmail}>
        //<div><TextField id="outlined-basic" label="First Name" variant="outlined" /></div>
        //<div><TextField id="outlined-basic" label="Last Name" variant="outlined" /></div>
        //<div><TextField id="outlined-basic" label="Email Address" variant="outlined" /></div>
        //<div><TextField id="outlined-basic" label="Your Message" variant="outlined" /></div>
        <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <TextField id="outlined-basic" label="Name" variant="outlined" input type="text" className="form-control" placeholder="Name" name="name" />
                </div>
                <p> </p>
                <div className="col-8 form-group pt-2 mx-auto">
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" input type="email" className="form-control" placeholder="Email Address" name="email" />
                </div>
                <p> </p>
                <div className="col-8 form-group pt-2 mx-auto">
                    <TextField id="outlined-basic" label="Subject" variant="outlined" input type="text" className="form-control" placeholder="Subject" name="subject" />
                </div>
                <p> </p>
                <div className="col-8 form-group pt-2 mx-auto">
                    <TextField id="outlined-multiline-static" label="Your message" multiline rows={4} variant="outlined" textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
                </div>
                <p> </p>
                <div className="col-8 pt-3 mx-auto">
                    <Button variant="outlined" color="primary" input type="submit" className="btn btn-info" value="Send Message">Send Message</Button>
                </div>
                <p> </p>
            </div>
        </form>
    );
}

//export default ContactForm



