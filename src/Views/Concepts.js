import React from 'react';
import ButtonAppBar from '../Components/NavBar';
import ConceptList from '../Components/ConceptList'
import DocumentView from '../Views/DocumentView'
import Header from '../Components/Header';

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
                <Header />
                <ButtonAppBar />
                {list}
            </div>
        );
    }

}

export default Concept