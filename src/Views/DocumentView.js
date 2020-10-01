import React from 'react';
import ButtonAppBar from '../Components/SampleNav';
import TextComponent from '../Components/textComponent';
import Video from '../Components/Video';
import Container from '@material-ui/core/Container';
import MultipleChoiceQuestion from '../Components/MultipleChoiceQuestion';
import CodeComponent from '../Components/CodeComponent';


class DocumentView extends React.Component{
// https://youtu.be/KEEKn7Me-ms
    render(){
        return(
            <div>
                <ButtonAppBar />
                <Container maxWidth="lg">
                
                <h1>
                    Recursion
                </h1>
                <h2>
                    Definition
                </h2>
                <TextComponent text="Recursion (adjective: recursive) occurs when a thing is defined in terms of itself or of its type. Recursion is used in a variety of disciplines ranging from linguistics to logic. The most common application of recursion is in mathematics and computer science, where a function being defined is applied within its own definition. While this apparently defines an infinite number of instances (function values), it is often done in such a way that no infinite loop or infinite chain of references can occur. "/>

                <h2>
                    Example 
                </h2>
                {/* add code component */}
                <Container maxWidth="md">
                     <Video id="KEEKn7Me-ms" title="Recursion video"/>
                </Container>
                <MultipleChoiceQuestion questionid="what would be the base case for the factorial function" options={["return 1", "return 0"]} />
                <CodeComponent text="for i in range(10):\nprint(i)\n"/> 


            </Container>



            </div>
            
           
        )
    };

}

export default DocumentView