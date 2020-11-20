import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Container from '@material-ui/core/Container';
//import ContactForm from '../Components/ContactForm';
import styles from '../mystyle.module.css';
import TextComponent from '../Components/textComponent';
import ContactForm from '../Components/ContactForm';


class HelpView extends React.Component {
    render() {
        return (
            <div>
		        <Header />
                <NavBar />
                {/* place holder */}
                <Container maxWidth="lg">
                    <h1 className={styles.header}>
                        What is SimpleDoc?
                    </h1>
                    <TextComponent className={styles.paragraph} text='For many people, understanding expert created articles and documentation 
                    on a subject in challenging, especially as a novice. This is often the case in first-year Computer Science courses. Alot of the documents, 
                    videos and explanations were written by experts who have been studying the material for years. What we aim to do is to get 
                    students to curate simplified documentation and other resources for first-year students. This will serve as an effective base 
                    of content and study material for tests and final exams in addition to it being a good reference tool for quick lookups during 
                    an assignment or a lab. There has been significant research that demonstrates that peers learn effectively from each other. 
                    This has led to the creation of "Active Learning Classrooms" as well as the implementation of tools such as "Peer wise" in 
                    many courses. However, most of these activities are focused on students discussing methods of solving problems as opposed to 
                    explaining concepts. Our tool helps fill this gap by allowing students to learn concepts from each other as well in a way 
                    that can be mediated by the instructors.' />
                    <h1 className={styles.header}>
                        Frequently Asked Questions
                    </h1>
                    <h1 className={styles.header}>
                        Contact Us
                    </h1>
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
