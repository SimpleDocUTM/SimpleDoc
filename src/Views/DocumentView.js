import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import TextComponent from '../Components/textComponent';
import Video from '../Components/Video';
import Container from '@material-ui/core/Container';
import CodeComponent from '../Components/CodeComponent';
import Button from '@material-ui/core/Button';
import styles from '../mystyle.module.css';
import SimpleDocRest from "../api/SimpleDocRest";

class DocumentView extends React.Component {

    constructor(props) {
        super(props);

        this.state = { docTitle: "", docId: "", docDescription: "", consid: 1, docAuthor: "", docDate: "", videos: [], codes: [], docDefinition: "", };
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
                    <h2 className={styles.subheader}>
                        Definition
                </h2>
                    <TextComponent className={styles.paragraph} text={docDefinition} />
                    <h2>
                        Description
                </h2>
                    <TextComponent text={docDescription} />
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

export default DocumentView



// <Container maxWidth="md">
//<Video id="KEEKn7Me-ms" title="Recursion video" align="center" />
//</Container>
