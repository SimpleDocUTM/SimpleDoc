import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';

import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Video from '../Components/Video';
import CodeComponent from '../Components/CodeComponent';
import styles from '../mystyle.module.css';
import SimpleDocRest from "../api/SimpleDocRest";
import TextComponent from '../Components/textComponent';

class DocumentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            docTitle: "", docId: this.props.match.params.id, docDescription: "", consid: 1, docAuthor: "", docDate: "", videos: [], codes: [], docDefinition: "",
        };
    }
    toQuiz = async (e) => {
        this.props.history.push('/quiz')
    }

    fetchDoc = async () => {
        SimpleDocRest.get(`/documents/` + this.state.docId + `/`)
            .then((result) => {
                this.setState({
                    docTitle: result.data.title,
                    dodId: result.data.id,
                    docDescription: result.data.description,
                    docAuthor: result.data.contributor,
                    docDate: result.data.created,
                    videos: result.data.videos,
                    codes: result.data.examples,
                    docDefinition: result.data.definition,

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
        const { docTitle, docId, docDescription, docAuthor, docDate, videos, codes, docDefinition } = this.state;
        return (
            <div>

		        <Header />
                <NavBar />
                {/* place holder */}
                <Container maxWidth="lg">
                    <h1 className={styles.header}>
                        {docTitle}
                    </h1>
		    <h6 className={styles.created}>
                        by {docAuthor}
                    </h6>
		    <h5>
			Please take a few seconds after reading the doc to give us feedback at our <Link to="/quiz/1"> Feedback Form</Link> NOTE: By submitting, you are giving consent to use your responses in future research work. If you have any questions about the project or your rights as a participant please submit a query to the contact page
		    </h5>
                    <h2 className={styles.subheader}>
                        Definition
                </h2>
                    <TextComponent className={styles.paragraph} text={docDefinition.replace("\r", "\n")} />
                    <h2>
                        Description
                </h2>
                    <TextComponent text={docDescription.replace("\r", "\n")} />
                    <Container maxWidth="md">
                        {videos.map(({ url, title }) => (
                            <Video
                                id={url}
                                title={title}
                            />
                        ))}
                    </Container>


                    <h2>
                        Code Examples
                    </h2>
                    {codes.map(({ description, code }) => (
                        <div>
                            <h3>
                                {description}
                            </h3>
                            <CodeComponent
                                code={code.replace("\\n", "\n")}
                                language="language-python"
                            />
                        </div>
                    ))}
                    <Button variant="contained" color="primary" onClick={this.toQuiz} >Take a Quiz</Button>

                </Container>



            </div>


        )
    };

}

export default withRouter(DocumentView)



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
