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

class EncapsulateImages extends React.Component {
    render() {
        return (
            <div>Finish EncapsulateImages class</div>
        );
    }
}

class FrontEndProjects extends React.Component {
    // image source name "../images/" + <image name> + ".png"
    images = {
        0: ["BuildAWikipediaViewer", "https://codepen.io/Bao88/full/GypKYB", "A CodePen.io app where we use the Wikipedia API to search for entries from their site, then load the results to our site."],
        1: ["aWeatherForecast", "https://codepen.io/Bao88/full/badZrd", "A site which shows the location and the temperature of where you are currently at."],
        2: ["quoteOfTheDay", "https://codepen.io/Bao88/full/rpVPaX", "A simple site where we can generate a new random quote whenever we interact with it."],
        3: ["twitchTVAPI", "https://codepen.io/Bao88/full/xpVOQL", "A project where we use the Twitch API to fetch the necessary data to check the status of selected streamers."]
    };

    // imgNames = ["BuildAWikipediaViewer", "aWeatherForecast", "quoteOfTheDay", "twitchTVAPI"];
    // links = ["https://codepen.io/Bao88/full/GypKYB", "https://codepen.io/Bao88/full/badZrd", "https://codepen.io/Bao88/full/rpVPaX", "https://codepen.io/Bao88/full/xpVOQL"];
            
    render() {
        return (
            <div className="projects">
                <h1 className="hTitle">freeCodeCamp Front End Development Projects</h1>
                <div className="FrontEndProjects">
                    <LinkedImages contents={this.images[0]} imgSrc={img1}/>
                    <LinkedImages contents={this.images[1]} imgSrc={img2}/>
                    <LinkedImages contents={this.images[2]} imgSrc={img3}/>
                    <LinkedImages contents={this.images[3]} imgSrc={img4}/>
                </div>
            </div>
        );
    }
}

export default FrontEndProjects;