import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class ConceptPage extends React.Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Concepts' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={this.setRedirect}>Concepts</Button>
            </div>
        )
    }
}
export default ConceptPage