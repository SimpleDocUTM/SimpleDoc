import React from 'react';
import ButtonAppBar from '../Components/NavBar';
import ConceptList from '../Components/ConceptList'
import DocumentView from '../Views/DocumentView'

class Concept extends React.Component {

    constructor() {
        super()
        this.state = {
            view: "list",
            document: 0
        }
    }

    viewDoc() {
        this.setState({
            view: "document"
        })
    }

    render() {
        var view;
        if (view == "document") {
            view = < DocumentView id={this.state.document} />
        } else {
            view = <ConceptList callBack={this.viewDoc.bind(this)} />
        }

        return (
            <div>
                <ButtonAppBar />
                <h1>Concepts</h1>
                {view}
            </div>
        );
    }

}

export default Concept