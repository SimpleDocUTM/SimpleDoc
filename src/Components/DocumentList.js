import React, { Component } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemText, } from '@material-ui/core/';

export class DocumentList extends Component {

    constructor() {
        this.state = {
            documents: []
        }
    }

    componentDidMount() {
        axios.get('simpledoc.utm.utoronto.ca:8000/api/documents/').then((res) => {
            console.log("Documents: ")
            console.log(res.data)
            this.setState({
                documents: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Concept Docuemntation
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button>
                        <ListItemText primary={} />
                    </ListItem>

                </List>
            </div>
        )
    }
}

export default DocumentList
