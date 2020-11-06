import React from 'react';
import ButtonAppBar from '../Components/NavBar';
import ConceptList from '../Components/ConceptList'
import DocumentView from '../Views/DocumentView'

class Concept extends React.Component {

    render() {
        return (
            <div>
                <ButtonAppBar />
                <h1>Concepts</h1>
                <ConceptList />
            </div>
        );
    }

}

export default Concept