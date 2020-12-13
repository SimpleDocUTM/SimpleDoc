import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../../mystyle.module.css';


class HomeButton extends React.Component {
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
            return <Redirect to='/HomePageView' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button className="navbar-button" onClick={this.setRedirect}>Home</Button>
            </div>
        )
    }
}
export default HomeButton
//<Button style={{ margin: "20px" }} onClick={this.setRedirect}>Home</Button>