import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../../mystyle.module.css';


class LoginButton extends React.Component {
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
            return <Redirect to='/Login' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button className="navbar-button" variant="outlined" onClick={this.setRedirect}>Login</Button>
            </div>
        )
    }
}
export default LoginButton
//<Button style={{ margin: "20px" }} variant="outlined" onClick={this.setRedirect}>Login</Button>