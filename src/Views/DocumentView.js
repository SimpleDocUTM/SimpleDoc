import React from 'react';
import ButtonAppBar from '../Components/NavBar';
import TextComponent from '../Components/textComponent';
import Video from '../Components/Video';
import Container from '@material-ui/core/Container';
import CodeComponent from '../Components/CodeComponent';
import Button from '@material-ui/core/Button';
import styles from '../mystyle.module.css'
import SimpleDocRest from "../api/SimpleDocRest";

class DocumentView extends React.Component {

    constructor(props) {
        super(props);

        this.state = { docTitle: "", docId: "", docDescription: "", consid: 1, docAuthor: "", docDate: "" };
    }
    toQuiz = async (e) => {
        this.props.history.push('/quiz')
    }

    fetchDoc = async () => {
        SimpleDocRest.get(`/documents/1/`)
            .then((result) => {
                this.setState({
                    docTitle: result.data.title,
                    dodId: result.data.id,
                    docDescription: result.data.description,
                    docAuthor: result.data.contributor,
                    docDate: result.data.created,
                });
            }
            )
            .catch((error) => {
                console.log(error);
            });
    };
    componentDidMount() {
        this.fetchDoc();
    }


    render() {
        const { docTitle, docId, docDescription, docAuthor, docDate, } = this.state;
        return (
            <div>
                <ButtonAppBar />
                {/* place holder */}
                <Container maxWidth="lg">
                    <h1 className={styles.header}>
                        {docTitle}
                    </h1>
                    <h6 className={styles.created}>
                        by {docAuthor}
                    </h6>
                    <h2 className={styles.subheader}>
                        Definition
                </h2>
                    <TextComponent className={styles.paragraph} text="Recursion (adjective: recursive) occurs when a thing is defined in terms of itself or of its type. Recursion is used in a variety of disciplines ranging from linguistics to logic. The most common application of recursion is in mathematics and computer science, where a function being defined is applied within its own definition. While this apparently defines an infinite number of instances (function values), it is often done in such a way that no infinite loop or infinite chain of references can occur. " />
                    {/* column not in database, not implemented */}
                    <h2>
                        Description
                </h2>
                    <TextComponent text={docDescription} />
                    <Container maxWidth="md">
                        <Video id="KEEKn7Me-ms" title="Recursion video" />
                        {/* column not in database, not implemented */}
                    </Container>

                    <h2>
                        Code Examples
                </h2>
                    <h3>
                        Code Example 1
                </h3>
                    <CodeComponent code={"# Sample highlight \nprint('1')"} language="language-python" />
                    <h3>
                        Code Example n
                </h3>
                    <CodeComponent code={"# Sample highlight \nprint('1')"} language="language-python" />
                    {/* no database, not implemented */}
                    <Button variant="contained" color="primary" onClick={this.toQuiz} >Take a Quiz</Button>

                </Container>



            </div>


        )
    };

}

export default DocumentView



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
