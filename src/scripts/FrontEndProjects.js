import React from "react";
import '../css/FrontEndProjects.css';

// Importing images
import img1 from '../images/BuildAWikipediaViewer.png';
import img2 from "../images/aWeatherForecast.png";
import img3 from "../images/quoteOfTheDay.png";
import img4 from "../images/twitchTVAPI.png";

class Image extends React.Component {
    render() {
        // var nameSrc = "../images/" + {this.props.imgName} + ".png";
        return (
            <img className="imgStyle" src={this.props.imgSrc} alt={this.props.imgName}/>
        );
    }
}

class LinkedImages extends React.Component {
    render() {
        return (
            <a href={this.props.contents[1]} className="linkStyle">
                <Image imgSrc={this.props.imgSrc} imgName={this.props.contents[0]}/>
            </a>
        );
    }
}

class FrontEndProjects extends React.Component {
    // image source name "../images/" + <image name> + ".png"
    images = {
        0: ["BuildAWikipediaViewer", "https://codepen.io/Bao88/full/GypKYB"],
        1: ["aWeatherForecast", "https://codepen.io/Bao88/full/badZrd"],
        2: ["quoteOfTheDay", "https://codepen.io/Bao88/full/rpVPaX"],
        3: ["twitchTVAPI", "https://codepen.io/Bao88/full/xpVOQL"]
    };

    // imgNames = ["BuildAWikipediaViewer", "aWeatherForecast", "quoteOfTheDay", "twitchTVAPI"];
    // links = ["https://codepen.io/Bao88/full/GypKYB", "https://codepen.io/Bao88/full/badZrd", "https://codepen.io/Bao88/full/rpVPaX", "https://codepen.io/Bao88/full/xpVOQL"];
            
    render() {

        return (
            <div className="FrontEndProjects">
                <h1 className="hTitle">freeCodeCamp Front End Development Projects</h1>
                <LinkedImages contents={this.images[0]} imgSrc={img1}/>
                <LinkedImages contents={this.images[1]} imgSrc={img2}/>
                <LinkedImages contents={this.images[2]} imgSrc={img3}/>
                <LinkedImages contents={this.images[3]} imgSrc={img4}/>
            </div>
        );
    }
}

export default FrontEndProjects;