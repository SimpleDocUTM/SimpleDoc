import React from 'react';
//import logo from '../logo.svg';
import '../App.css';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

class Video extends React.Component{

    render() {
        const embedUrl = `${BASE_EMBED_URL}${this.props.id}`;
        return (
            <div>
                <h2>Video: {this.props.title}</h2>
                <iframe width="560" height="315" src={embedUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title={'video'}></iframe>
            </div>
        );
    }
}
export default Video;
