import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
                    <SyntaxHighlighter language={this.props.language} showLineNumbers={true} wrapLines={true} style={vs2015} >
                        {this.props.code}
                    </SyntaxHighlighter>

                    </div>
            );
    }
}

export default CodeComponent;