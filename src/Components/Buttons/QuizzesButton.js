import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../../mystyle.module.css';


class QuizzesButton extends React.Component {
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
            return <Redirect to='/QuizzesPage' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Button className="navbar-button" onClick={this.setRedirect}>Quizzes</Button>
            </div>
        )
    }
}
export default QuizzesButton
//<Button style={{ margin: "20px" }} onClick={this.setRedirect}>Quizzes</Button>
