import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Contribute extends React.Component {
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
            return <Redirect to='/ContributionPage' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button style={{ margin: "20px" }} onClick={this.setRedirect}>Contribute</Button>
            </div>
        )
    }
}
export default Contribute
