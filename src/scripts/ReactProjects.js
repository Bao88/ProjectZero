import React from "react";
import "../css/ReactProjects.css";

// images
import img0 from '../images/buildamarkdownpreviewer.png';
import img1 from "../images/buildacamperleaderboard.png";
import img2 from "../images/buildarecipebox.png";

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

class ReactProjects extends React.Component {
    images = {
        0: ["buildamarkdownpreviewer", "https://github.com/Bao88/buildamarkdownpreviewer", "React with SASS, a markdown previewer."],
        1: ["buildacamperleaderboard", "https://github.com/Bao88/buildacamperleaderboard", "using REST/SOAP to fetch data and create a Top 100 campers in React"],
        2: ["buildarecipebox", "https://bao88.github.io/buildarecipebox/", "Build a Recipe Box where you can add, edit or delete data from the app, data will be stored to and retrieved from localstorage"]
    }

    render(){
        return (
            <div className="projects">
                <h1 className="hTitle">freeCodeCamp React Front End Development Projects</h1>
                <div className="FrontEndProjects">
                   <LinkedImages contents={this.images[0]} imgSrc={img0}/>
                   <LinkedImages contents={this.images[1]} imgSrc={img1}/>
                   <LinkedImages contents={this.images[2]} imgSrc={img2}/>
                </div>
            </div>
        );
    }
}

export default ReactProjects;