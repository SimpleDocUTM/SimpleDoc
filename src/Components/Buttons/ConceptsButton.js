import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../../mystyle.module.css';


class ConceptsButton extends React.Component {
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
            return <Redirect to='/Concepts/general' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button onClick={this.setRedirect} className="navbar-button">Concepts</Button>
            </div >
        )
    }
}
export default ConceptsButton
//<Button style={{ margin: "20px" }} onClick={this.setRedirect}>Concepts</Button>