import React, { Component } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemText, ListSubheader, Collapse } from '@material-ui/core/';

export class DocumentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            documents: [{ created: '2020-10-22', title: 'How recursion works', description: "This is a description", difficulty: 3, contributor: "hafezos1", rating: 4.0 }, { created: '2020-10-22', title: 'What are trees?', description: "This is a description that's very very long. We need to make it more than 200 characters long in order for it to demonstrate what we are trying to do. As you can see, it works okay, but we need styling and maybe we can make it a little more dynamic. Say we get rid of the '...' when the string is less then 250 characters long.", difficulty: 2, contributor: "hafezos1", rating: 5.0 }],
            concept: this.props.concept //The ID of the concept
        }
    }

    // componentDidMount() {
    //     axios.get('simpledoc.utm.utoronto.ca:8000/api/documents/' + this.state.concept).then((res) => {
    //         console.log("Documents: ")
    //         console.log(res.data)
    //         this.setState({
    //             documents: res.data
    //         })
    //     })
    // }

    render() {
        var documents = [];
        for (var i = 0; i < this.state.documents.length; i++) {
            documents.push(<ListItem button key={i}>
                <ListItemText primary={this.state.documents[i]["title"]} secondary={this.state.documents[i]["description"].slice(0, 200) + "..."} />
                <ListItemText primary={"Contributor: " + this.state.documents[i]["contributor"]} />
                <ListItemText primary={"Article Rating: " + this.state.documents[i]["rating"]} />
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
