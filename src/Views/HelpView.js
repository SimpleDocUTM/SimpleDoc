import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Container from '@material-ui/core/Container';
import ContactForm from '../Components/ContactForm';
class HelpView extends React.Component {



    render() {
        return (
            <div>
		<Header />
                <NavBar />
                {/* place holder */}
                <Container maxWidth="lg">
			<ContactForm />

		</Container>
            </div>


        )
    };

}

export default HelpView



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
