import React from "react";
import "../css/ReactProjects.css";

// images
import img0 from '../images/timestampmicroservice.png';
import img1 from "../images/bao88-request-header-parser-microservice-glitch-me.png";
import img2 from "../images/url-shortener-microservice.png";
import img3 from "../images/image-search-abstraction-layer.png";
import img4 from "../images/metadata-microservice.png";

class Image extends React.Component {
    render() {
        return (
            <img className="imgStyle" src={this.props.imgSrc} alt={this.props.imgName}/>
        );
    }
}

class LinkedImages extends React.Component {
    render() {
        return (
            <div className="container">
                <a href={this.props.contents[1]} target="_blank">
                    <Image imgSrc={this.props.imgSrc} imgName={this.props.contents[0]}/>
                    <div className="overlay">
                        <div className="text">
                            {this.props.contents[2]}
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

class ApiProjects extends React.Component {
    images = {
        0: ["timestampmicroservice", "https://bao88-timestamp-microservice.glitch.me/", "Timestamp Microservice"],
        1: ["bao88-request-header-parser-microservice-glitch-me", "https://bao88-request-header-parser-microservice.glitch.me/", "Request Header Parser Microservice"],
        2: ["url-shortener-microservice", "https://bao88-url-shortener-microservice.glitch.me/", "URL Shortener Microservice"],
        3: ["image-search-abstraction-layer", "https://bao88-image-search-abstraction-layer.glitch.me/", "Image Search Abstraction Layers."],
        4: ["metadata-microservice", "https://bao88-file-metadata-microservice.glitch.me/", "File Metadata Microservice"]
    }

    render(){
        return (
            <div className="projects">
                <h1 className="hTitle">API Projects</h1>
                <div className="FrontEndProjects">
                   <LinkedImages contents={this.images[0]} imgSrc={img0}/>
                   <LinkedImages contents={this.images[1]} imgSrc={img1}/>
                   <LinkedImages contents={this.images[2]} imgSrc={img2}/>
                   <LinkedImages contents={this.images[3]} imgSrc={img3}/>
                   <LinkedImages contents={this.images[4]} imgSrc={img4}/>
                </div>
            </div>
        );
    }
}

export default ApiProjects;