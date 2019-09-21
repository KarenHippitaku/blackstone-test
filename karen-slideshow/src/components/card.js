import React from 'react';
import './card.css';
// import Button from './button';

class Card extends React.Component {
  render () {

    return (
      <dl className="card">
      <dt className="card-header">
      <img src={this.props.url} alt={this.props.name}/>
      <h4>{this.props.name}</h4>
      </dt>
      <dt className="card-body">
      <p>Debut: {this.props.debut}</p>
      <p>Episodes: {this.props.episodes}</p>
      <p>Original voice: {this.props.voice}</p>
      </dt>
      </dl>
    )
  }
}

export default Card;
