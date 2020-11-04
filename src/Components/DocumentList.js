import React, { Component } from 'react'
import SimpleDocRest from "../api/SimpleDocRest";
import { List, ListItem, ListItemText, ListSubheader, Collapse } from '@material-ui/core/';

export class DocumentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            documents: [{ created: '2020-10-22', title: 'How recursion works', Description: "This is a Description", difficulty: 3, Contributor: "hafezos1", Rating: 4.0 }, { created: '2020-10-22', title: 'What are trees?', Description: "This is a Description that's very very long. We need to make it more than 200 characters long in order for it to demonstrate what we are trying to do. As you can see, it works okay, but we need styling and maybe we can make it a little more dynamic. Say we get rid of the '...' when the string is less then 250 characters long.", difficulty: 2, Contributor: "hafezos1", Rating: 5.0 }],
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
                <ListItemText primary={"Contributor: " + this.state.documents[i]["Contributor"]} />
                <ListItemText primary={"Article Rating: " + this.state.documents[i]["Rating"]} />
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
