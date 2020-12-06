import React, { Component } from "react";
import SimpleDocRest from "../api/SimpleDocRest";
<<<<<<< HEAD
import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core/';
import DocumentList from './DocumentList'
import "./list.css";
=======
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  CircularProgress,
} from "@material-ui/core/";
import DocumentList from "./DocumentList";
import Loading from "./Loading";
>>>>>>> 37241c9e54bfa28f24549fdba03635316eeb2d02

export class ConceptList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concepts: [],
      conceptList: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    SimpleDocRest.get("concepts/").then((res) => {
      this.setState({
        concepts: res.data,
      });
      const ListItemStyle = {
        padding: "5px",
        margin: "120px 50px",
        maxWidth: "100px",
        float: "left",
      };
      var conceptList = [];
      for (var i = 0; i < this.state.concepts.length; i++) {
        if (this.state.concepts[i].category == this.props.category) {
          conceptList.push(
            <ListItem button key={i}>
              <ListItemText
                style={ListItemStyle}
                primary={this.state.concepts[i]["name"]}
              />
              <DocumentList concept={this.state.concepts[i]["id"]} />
            </ListItem>
          );
        } else if (this.props.category == "general" || !this.props.category) {
          conceptList.push(
            <ListItem button key={i}>
              <ListItemText
                style={ListItemStyle}
                primary={this.state.concepts[i]["name"]}
              />
              <DocumentList concept={this.state.concepts[i]["id"]} />
            </ListItem>
          );
        }
      }
      this.setState({
        conceptList: conceptList,
        isLoading: false,
      });
    });
  }

<<<<<<< HEAD
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
=======
  render() {
    const { isLoading, conceptList } = this.state;
    return (
      <div>
        <List component="nav" aria-labelledby="nested-list-subheader">
          {isLoading ? <Loading /> : conceptList}
        </List>
      </div>
    );
  }
>>>>>>> 37241c9e54bfa28f24549fdba03635316eeb2d02
}

export default ConceptList;
