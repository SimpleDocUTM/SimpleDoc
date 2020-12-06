import React, { Component } from "react";
import SimpleDocRest from "../api/SimpleDocRest";
<<<<<<< HEAD
import { withRouter, Link, Redirect } from "react-router-dom"
import { List, ListItem, ListItemText, ListSubheader, Collapse, Typography } from '@material-ui/core/';
import "./list.css";
=======
import { withRouter, Link, Redirect } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Collapse,
} from "@material-ui/core/";
import Loading from "./Loading";
>>>>>>> 37241c9e54bfa28f24549fdba03635316eeb2d02

export class DocumentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      concept: this.props.concept, //The ID of the concept
      redirect: false,
      id: 0,
      listItems: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    SimpleDocRest.get("/documents/").then((res) => {
      this.setState({
        documents: res.data,
      });
      const ListItemStyle = {
        padding: "5px",
        margin: "120px 50px",
        maxWidth: "500px",
      };
      var listItems = [];
      // Replace if statement with a fetch by foreign key
      for (var i = 0; i < this.state.documents.length; i++) {
        if (this.state.concept == this.state.documents[i]["concept"]) {
          var id = this.state.documents[i]["id"];
          var l = `/DocumentView/${id}`;
          listItems.push(
            <Link to={l}>
              <ListItem button key={i}>
                <ListItemText
                  style={ListItemStyle}
                  primary={this.state.documents[i]["title"]}
                  secondary={
                    this.state.documents[i]["description"].slice(0, 100) + "..."
                  }
                />
              </ListItem>
            </Link>
          );
        }
      }
      this.setState({
        listItems: listItems,
        isLoading: false,
      });
    });
  }

<<<<<<< HEAD
    async componentDidMount() {
        SimpleDocRest.get('/documents/').then((res) => {
            this.setState({
                documents: res.data
            })

            var listItems = [];
            // Replace if statement with a fetch by foreign key
            for (var i = 0; i < this.state.documents.length; i++) {
                if (this.state.concept == this.state.documents[i]["concept"]) {
                    var id = this.state.documents[i]["id"];
                    var l = `/DocumentView/${id}`;
                    listItems.push(<Link classes={{ root: "link" }} to={l} > <div className="listItem"><ListItem button key={i} >
                        <ListItemText primary={<Typography variant="h5" className="primary">{this.state.documents[i]["title"]}</Typography>} secondary={<Typography variant="h6" className="secondary">{this.state.documents[i]["description"].slice(0, 100) + "..."}</Typography>} />
                        <ListItemText classes={{ root: "primary" }} primary="Author" secondary={<Typography variant="h6" className="secondary">{this.state.documents[i]["contributor"]}</Typography>} />
                    </ListItem ></div>
                    </Link >);
                }
            }
            this.setState({
                listItems: listItems
            })
        })
    }


    render() {
        return (
            <div>
                {/* {this.renderRedirect()} */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        </ListSubheader>
                    }
                >
                    {this.state.listItems}

                </List>
                {/* </Collapse> */}
            </div >
        )
    }
=======
  render() {
    const { isLoading, listItems } = this.state;
    return (
      <div>
        {/* {this.renderRedirect()} */}
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
        >
          {isLoading ? <Loading /> : listItems}
        </List>
        {/* </Collapse> */}
      </div>
    );
  }
>>>>>>> 37241c9e54bfa28f24549fdba03635316eeb2d02
}

export default withRouter(DocumentList);
