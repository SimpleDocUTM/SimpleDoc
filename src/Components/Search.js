import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Redirect, withRouter } from "react-router-dom";
import SimpleDocRest from "../api/SimpleDocRest";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [], docs: [], concepts: [],
        };
        this.onTagsChange = this.onTagsChange.bind(this);
    }
    fetchDoc = () => {
        SimpleDocRest.get(`/documents/`)
            .then((result) => {
                this.setState({
                    docs: result.data,
                })
                var concepts = [];
                for (var i = 0; i < result.data.length; i++) {
                    concepts.push(result.data[i].title);

                }
                this.setState({
                    concepts: concepts
                });
            }
            )
            .catch((error) => {
                console.log(error);
            });


    };

    onTagsChange = async (event, values) => {
        this.setState({
            tags: values
        }, () => {
            for (var i = 0; i < this.state.docs.length; i++) {
                if (values == this.state.docs[i].title) {
                    this.props.history.push('/DocumentView/' + this.state.docs[i].id.toString())
                    window.location.reload(false);
                }
            }

        });
    };
    componentDidMount() {
        this.fetchDoc();
    };


    render() {
        const { concepts, docs } = this.state;
        return (
            <div style={{ width: 500 }}>
                <Autocomplete
                    options={concepts}
                    getOptionLabel={option => option}
                    onChange={this.onTagsChange}
                    renderInput={params => (
                        <TextField style={{ marginLeft: "auto" }}
                            {...params}
                            variant="outlined"
                            label="Search"
                            fullWidth
                        />
                    )}
                />
            </div>
        );
    }
}

export default withRouter(Search);