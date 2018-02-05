import React from "react";
import "../css/ReactProjects.css";

// images
import img0 from '../images/VisualizeDataWithaBarChart.png';
import img1 from "../images/VisualizeDataWithaScatterplotGraph.png";
import img2 from "../images/VisualizeDataWithaHeatMap.png";
import img3 from "../images/ShowNationalContiguityWithaForceDirectedGraph.png";
import img4 from "../images/MapDataAcrosstheGlobe.png";

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

class VisualizationProjects extends React.Component {
    images = {
        0: ["VisualizeDataWithaBarChart", "https://codepen.io/Bao88/full/dJBVbX/", "Visualize Data with a Bar Chart"],
        1: ["VisualizeDataWithaScatterplotGraph", "https://codepen.io/Bao88/full/Yezage/", "Visualize Data with a Scatterplot Graph"],
        2: ["VisualizeDataWithaHeatMap", "https://codepen.io/Bao88/full/EQxevw/", "Visualize Data with a Heat Map"],
        3: ["ShowNationalContiguityWithaForceDirectedGraph", "https://codepen.io/Bao88/full/PQqZrv/", "Show National Contiguity with a Force Directed Graph."],
        4: ["MapDataAcrosstheGlobe", "https://codepen.io/Bao88/full/JpdePz/", "Map Data Across the Globe"]
    }

    render(){
        return (
            <div className="projects">
                <h1 className="hTitle">freeCodeCamp Data Visualization Projects</h1>
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

export default VisualizationProjects;