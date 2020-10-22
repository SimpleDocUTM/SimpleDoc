import React, { Component } from 'react'
// import axios from 'axios'
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core/';
import DocumentList from './DocumentList'

export class ConceptList extends Component {

    constructor() {
        super()
        this.state = {
            concepts: [{ created: "2020-10-22", description: "Recursion", id: 0 }, { created: "2020-10-21", description: "Trees", id: 1 }]
        }
    }

    // componentDidMount() {
    //     axios.get('simpledoc.utm.utoronto.ca:8000/api/concepts/').then((res) => {
    //         console.log("Documents: ")
    //         console.log(res.data)
    //         this.setState({
    //             documents: res.data
    //         })
    //     })
    // }

    render() {
        var concepts = [];
        for (var i = 0; i < this.state.concepts.length; i++) {
            concepts.push(<ListItem button key={i}>
                <ListItemText primary={this.state.concepts[i]["description"]} />
                <DocumentList concept={this.state.concepts[i]["id"]} />
            </ListItem>);
        }
        return (
            <div>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Concepts
                        </ListSubheader>
                    }
                >
                    {concepts}

                </List>
            </div>
        )
    }
}

export default ConceptList
