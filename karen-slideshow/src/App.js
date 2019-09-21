import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slideshow from './components/slideshow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there, and welcome
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Slideshow/>
    </div>
  );
}

export default App;
