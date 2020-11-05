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

        const ListItemStyle = {
            padding: "5px",
            margin: "120px 50px",
            maxWidth: "500px"
        }

        var documents = [];
        console.log("?????")
        console.log(this.state.documents)
        for (var i = 0; i < this.state.documents.length; i++) {
            if (this.state.concept == this.state.documents[i]["concept"]) {
                console.log(this.state.concept, this.state.documents[i]["concept"])
                documents.push(<ListItem button key={i}>
                    <ListItemText style={ListItemStyle} primary={this.state.documents[i]["title"]} secondary={this.state.documents[i]["description"]} />
                    {/* <ListItemText primary={" Contributor: " + this.state.documents[i]["contributor"]} />
                <ListItemText primary={" Article Rating: " + this.state.documents[i]["rating"]} /> */}
                </ListItem>);
            }
        }
        return (
            <div>
                {/* <Collapse> */}
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

export default DocumentList
