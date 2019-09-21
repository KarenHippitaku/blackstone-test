import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slideshow from './components/slideshow';
// import { simpsons } from './data.json';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      simpsons: [
        {id: 1,
          url: "https://img.webme.com/pic/l/los-simpson-v2/new4_good.gif",
        	name: "Dr. Nick Riviera",
        	debut: "Jannuary 10th of 1991",
        	episodes: "4",
        	voice: "Hank Azaria"
        },
        {id: 2, 
          url: "https://img.webme.com/pic/l/los-simpson-v2/new4_good.gif",
          name: "Dr. Nick Riviera",
          debut: "Jannuary 10th of 1991",
          episodes: "4",
          voice: "Hank Azaria"
        },
        {id: 3,
          url: "https://img.webme.com/pic/l/los-simpson-v2/new4_good.gif",
          name: "Dr. Nick Riviera",
          debut: "Jannuary 10th of 1991",
          episodes: "4",
          voice: "Hank Azaria"
        },
        {id: 4,
          url: "https://img.webme.com/pic/l/los-simpson-v2/new4_good.gif",
          name: "Dr. Nick Riviera",
          debut: "Jannuary 10th of 1991",
          episodes: "4",
          voice: "Hank Azaria"
        },
        {id: 5,
          url: "https://img.webme.com/pic/l/los-simpson-v2/new4_good.gif",
          name: "Dr. Nick Riviera",
          debut: "Jannuary 10th of 1991",
          episodes: "4",
          voice: "Hank Azaria"
        }
      ]

    }
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
      <Slideshow slides={this.state.simpsons}/>
      </div>
    )
  }
}

export default App;
