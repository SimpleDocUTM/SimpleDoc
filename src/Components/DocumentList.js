import React, { Component } from 'react'
import SimpleDocRest from "../api/SimpleDocRest";
import { List, ListItem, ListItemText, ListSubheader, Collapse } from '@material-ui/core/';

export class DocumentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            documents: [],
            concept: this.props.concept //The ID of the concept
        }
    }

    componentDidMount() {
        SimpleDocRest.get('documents/').then((res) => {
            console.log("Documents: ")
            console.log(res.data)
            this.setState({
                documents: res.data
            })
        })
    }

    render() {
        var documents = [];
        for (var i = 0; i < this.state.documents.length; i++) {
            documents.push(<ListItem button key={i}>
                <ListItemText primary={this.state.documents[i]["title"]} secondary={this.state.documents[i]["Description"]} />
                {/* <ListItemText primary={"Contributor: " + this.state.documents[i]["Contributor"]} /> */}
                {/* <ListItemText primary={"Article Rating: " + this.state.documents[i]["Rating"]} /> */}
            </ListItem>);
        }
        return (
            <div>
                {/* <Collapse> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Articles
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

export default DocumentList
