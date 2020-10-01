import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react';




class CodeComponent extends React.Component{
    render(){
    const mystyle = {
        cardcomponent:{
            minWidth: 275,
        },
        cardcontent:{
            fontSize: 14,
        },
        
             
            }
            return(
                    <div>
                            

                    <SyntaxHighlighter language="python" >
                        {this.props.text}
                    </SyntaxHighlighter>
                                    
                            
                    </div>
            );
    }
}

export default CodeComponent;