import React from 'react';
import ButtonAppBar from '../Components/NavBar';
import ConceptList from '../Components/ConceptList'
import DocumentView from '../Views/DocumentView'

class Concept extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        var list = <ConceptList category={"general"} />
        var category = this.props.match.params.category;
        if (category != "general") {
            list = <ConceptList category={category} />
        }
        return (
            <div>
                <ButtonAppBar />
                <h1>Concepts</h1>
                {list}
            </div>
        );
    }

}

export default Concept