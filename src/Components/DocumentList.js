import React, { Component } from 'react'
import SimpleDocRest from "../api/SimpleDocRest";
import { withRouter, Link, Redirect } from "react-router-dom"
import { List, ListItem, ListItemText, ListSubheader, Collapse } from '@material-ui/core/';

import SimpleDocRest from "../api/SimpleDocRest";

export class DocumentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            documents: [],
            concept: this.props.concept, //The ID of the concept
            redirect: false,
            id: 0,
            listItems: []
        }
    }

    async componentDidMount() {
        SimpleDocRest.get('/documents/').then((res) => {
            this.setState({
                documents: res.data
            })
            const ListItemStyle = {
                padding: "5px",
                margin: "120px 50px",
                maxWidth: "500px"
            }
            var listItems = [];
            for (var i = 0; i < this.state.documents.length; i++) {
                if (this.state.concept == this.state.documents[i]["concept"]) {
                    var id = this.state.documents[i]["id"];
                    var l = `/DocumentView/${id}`;
                    listItems.push(<Link to={l}><ListItem button key={i}>
                        <ListItemText style={ListItemStyle} primary={this.state.documents[i]["title"]} secondary={this.state.documents[i]["description"].slice(0, 100) + "..."} />
                    </ListItem>
                    </Link>);
                }
            }
            this.setState({
                listItems: listItems
            })
        })
    }


    render() {
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
                    {this.state.listItems}

                </List>
                {/* </Collapse> */}
            </div >
        )
    }
}

export default withRouter(DocumentList)
