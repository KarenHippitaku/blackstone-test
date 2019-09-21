import React, { Component } from 'react';
import './slideshow.css';
import Card from './card';
import { simpsons } from '../data.json';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons
    }
  };

  render() {
    // const details = this.state.simpsons.details.map((detail, i) => {
    //   return (
    //     <Card
    //       key={i}
    //       picture={detail.picture}
    //       name={detail.name}
    //       debut={detail.debut}
    //       episodes={detail.episodes}
    //       voice={detail.voice}
    //     />
    //   )
    // });
    let slide = this.props.slides.map((slide) => {
      return <Card key={slide.id} url={slide.url} name={slide.name}
      debut={slide.debut} episodes={slide.episodes} voice={slide.voice}/>
    })

    return (
      <div className="card-slider ">
        <div className="card-slider-wrapper">
          {slide}
        </div>
      </div>
    )
  }
}

export default Slideshow;
