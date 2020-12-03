import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../../mystyle.module.css';


class CreatePage extends React.Component {
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
                <Button className="button" onClick={this.setRedirect}>Create a new page</Button>
            </div>
        )
    }
}
export default Contribute
//<Button style={{ margin: "20px" }} color="primary" onClick={this.setRedirect}>Create a new page</Button>