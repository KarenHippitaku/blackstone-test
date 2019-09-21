import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slideshow from './components/slideshow';

class App extends Component {
  constructor () {
    super ();
  }
  render () {

    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Hello there, and welcome
      </p>
      <p className="App-link">
      Keep learning
      </p>
      </header>
      <Slideshow/>
      </div>
    )
  }
}

export default App;
