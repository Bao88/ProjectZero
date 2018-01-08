import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
// import Intro from './intro';
import FrontEndProjects from './FrontEndProjects';



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
          <h1>Front End Development Program Certification</h1>
          <a href="https://www.freecodecamp.org/bao88/front-end-certification">
            <img src="https://i.imgur.com/ToFZKBd.jpg" alt="certification"/>
          </a>
        </div>

        <FrontEndProjects />

        <div className="bottom"></div>
      </div>
    );
  }
}

export default App;
