import React, { Component } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemText, } from '@material-ui/core/';

export class DocumentList extends Component {

    constructor() {
        this.state = {
            concepts: []
        }
    }

    componentDidMount() {
        axios.get('simpledoc.utm.utoronto.ca:8000/api/concepts/').then((res) => {
            console.log("Documents: ")
            console.log(res.data)
            this.setState({
                documents: res.data
            })
        })
    }

    render() {
        var concepts = [];
        for (var i = 0; i < numrows; i++) {
            concepts.push(<ListItem button key={i}> <ListItemText primary={this.state.concepts} /> </ListItem>);
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
                    className={classes.root}
                >
                    {concepts}

                </List>
            </div>
        )
    }
}

export default DocumentList
