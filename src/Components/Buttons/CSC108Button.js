import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class CSC108Button extends React.Component {
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
            return <Redirect to='/DocumentView' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button style={{ margin: "20px" }} variant="contained" onClick={this.setRedirect}>CSC108 Concepts</Button>
            </div>
        )
    }
}
export default CSC108Button
