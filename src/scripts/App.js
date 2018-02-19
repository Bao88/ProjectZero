import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
// import Intro from './intro';
import FrontEndProjects from './FrontEndProjects';
import ReactProjects from './ReactProjects';
import { Carousel } from 'react-responsive-carousel';
import VisualizationProjects from './VisualizationProjects';
import ApiProjects from "./ApiProjects";
import FullStackProjects from "./FullStackProjects"

// Images
import img0 from "../images/data-visualization-certification.png";
import img1 from "../images/front-end-certification.png";
import img2 from "../images/Certificate.png";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My journey becoming a fullstack developer (website in progress)</h1>
        </header>
        
        <p className="App-intro">
          The purpose of this site is to show some of the projects that I did in the duration of a 20-weeks-course. I started
          as a backend developer thus the projects shown here were mainly focused in front-end developing.
        </p>

        <div className="content">
          <h1>Certifications</h1>
          <a href="https://www.freecodecamp.org/bao88/front-end-certification" target="_blank">
            <img src={img1} alt="fcertification"/>
          </a>
          <a href="https://www.freecodecamp.org/bao88/data-visualization-certification" target="_blank">
            <img src={img0} alt="vcertification"/>
          </a>
          <a href="https://www.youracclaim.com/badges/19a1d2a0-11c5-4eb8-98a4-75d4d7d36dad/linked_in_profile" target="_blank">
            <img src={img2} alt="maincertification"/>
          </a>
          
        </div>

        <FrontEndProjects />
        <ReactProjects />
        <VisualizationProjects />
        <ApiProjects />
        <FullStackProjects />
        <div className="bottom"></div>
      </div>
    );
  }
}

export default App;
