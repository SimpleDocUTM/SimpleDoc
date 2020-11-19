import React, { Component } from 'react'
import SimpleDocRest from "../api/SimpleDocRest";
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core/';
import DocumentList from './DocumentList'

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
            const ListItemStyle = {
                padding: "5px",
                margin: "120px 50px",
                maxWidth: "100px",
                float: "left"
            }
            var conceptList = [];
            for (var i = 0; i < this.state.concepts.length; i++) {
                if (this.state.concepts[i].category == this.props.category) {
                    conceptList.push(<ListItem button key={i}>
                        <ListItemText style={ListItemStyle} primary={this.state.concepts[i]["name"]} />
                        <DocumentList concept={this.state.concepts[i]["id"]} />
                    </ListItem>);
                } else if (this.props.category == 'general') {
                    conceptList.push(<ListItem button key={i}>
                        <ListItemText style={ListItemStyle} primary={this.state.concepts[i]["name"]} />
                        <DocumentList concept={this.state.concepts[i]["id"]} />
                    </ListItem>);
                }
            }
            this.setState({
                conceptList: conceptList
            });
        })
    }

    render() {


        return (
            <div>
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
