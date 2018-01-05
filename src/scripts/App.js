import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import Intro from './intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button>Add Stuff</button>
        </p>

        <div className="content">
          hello
        </div>

        <div className="portfolio"></div>

        <div className="bottom"></div>
      </div>
    );
  }
}

export default App;
