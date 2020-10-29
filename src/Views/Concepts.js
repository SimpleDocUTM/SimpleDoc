import React from 'react';
import ButtonAppBar from '../Components/SampleNav';
import ConceptList from '../Components/ConceptList'

class ContributionPage extends React.Component {

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

export default ContributionPage