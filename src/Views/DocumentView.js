import React from 'react';
import ButtonAppBar from '../Components/SampleNav';
import TextComponent from '../Components/textComponent';
import Video from '../Components/Video';
import Container from '@material-ui/core/Container';
import CodeComponent from '../Components/CodeComponent';
import Button from '@material-ui/core/Button';

class DocumentView extends React.Component{
// https://youtu.be/KEEKn7Me-ms
    
    render(){
        
        return(
            <div>
                <ButtonAppBar /> 
                {/* place holder */}
                <Container maxWidth="lg">
                
                <h1>
                    Recursion
                </h1>
                <h2>
                    Definition
                </h2>
                <TextComponent text="Recursion (adjective: recursive) occurs when a thing is defined in terms of itself or of its type. Recursion is used in a variety of disciplines ranging from linguistics to logic. The most common application of recursion is in mathematics and computer science, where a function being defined is applied within its own definition. While this apparently defines an infinite number of instances (function values), it is often done in such a way that no infinite loop or infinite chain of references can occur. "/>
                <h2>
                    Description
                </h2>
                <TextComponent text="Recusion solves a large problem by sloving a smaller problem each recursive iteration eventually reaching a base case." />
                <Container maxWidth="md">
                     <Video id="KEEKn7Me-ms" title="Recursion video"/>
                </Container>
                <h2>
                    Code Examples
                </h2>
                <h3>
                    Code Example 1
                </h3>
                <CodeComponent code={"# Sample highlight \nprint('1')"} language="language-python"/> 
                <h3>
                    Code Example n
                </h3>
                <CodeComponent code={"# Sample highlight \nprint('1')"} language="language-python"/> 
            
            
                <Button variant="contained" color="primary" onClick={1} >Take a Quiz</Button>


            </Container>



            </div>
            
           
        )
    };

}

export default DocumentView