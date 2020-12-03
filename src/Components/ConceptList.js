import React, { Component } from 'react'
import SimpleDocRest from "../api/SimpleDocRest";
import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core/';
import DocumentList from './DocumentList'
import "./list.css";

export class ConceptList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            concepts: [],
            conceptList: []
        }
    }

    async componentDidMount() {
        SimpleDocRest.get('concepts/').then((res) => {
            this.setState({
                concepts: res.data
            })
            var conceptList = [];
            for (var i = 0; i < this.state.concepts.length; i++) {
                if (this.state.concepts[i].category == this.props.category) {
                    conceptList.push(
                        <div className="conceptList">
                            {/* <ListItem button key={i}> */}
                            {/* <ListItemText primary={<Typography variant="h5" className="conceptName">{this.state.concepts[i]["name"]}</Typography>} /> */}
                            {/* </ListItem> */}
                            <li>{this.state.concepts[i]["name"]}</li>
                            <DocumentList concept={this.state.concepts[i]["id"]} />

                        </div>);
                } else if (this.props.category == 'general' || !this.props.category) {
                    conceptList.push(<div className="conceptList">
                        {/* <ListItem button key={i}>
                        <ListItemText primary={<Typography variant="h5" className="conceptName">{this.state.concepts[i]["name"]}</Typography>} />
                    </ListItem> */}
                        <li>{this.state.concepts[i]["name"]}</li>
                        <DocumentList concept={this.state.concepts[i]["id"]} />
                    </div>);
                }
            }
            this.setState({
                conceptList: conceptList
            });
        })
    }

    render() {


        return (
            <div className="listContainer">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {this.state.conceptList}

                </List>
            </div>
        )
    }
}

export default ConceptList
