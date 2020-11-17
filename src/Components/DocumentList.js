import React, { Component } from 'react'
import SimpleDocRest from "../api/SimpleDocRest";
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { List, ListItem, ListItemText, ListSubheader, Collapse } from '@material-ui/core/';

export class DocumentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            documents: [],
            concept: this.props.concept, //The ID of the concept
            redirect: false,
            id: 0
        }
    }

    async componentDidMount() {
        SimpleDocRest.get('/documents/').then((res) => {
            this.setState({
                documents: res.data
            })
        })
    }


    render() {
        const ListItemStyle = {
            padding: "5px",
            margin: "120px 50px",
            maxWidth: "500px"
        }

        var documents = [];
        for (var i = 0; i < this.state.documents.length; i++) {
            if (this.state.concept == this.state.documents[i]["concept"]) {
                var id = this.state.documents[i]["id"];
                documents.push(<ListItem button key={i} onClick={() => this.props.history.push(`/DocumentView/${id}`)}>
                    <ListItemText style={ListItemStyle} primary={this.state.documents[i]["title"]} secondary={this.state.documents[i]["description"]} />
                </ListItem>);
            }
        }
        return (
            <div>
                {/* {this.renderRedirect()} */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        </ListSubheader>
                    }
                >
                    {documents}

                </List>
                {/* </Collapse> */}
            </div >
        )
    }
}

export default withRouter(DocumentList)
