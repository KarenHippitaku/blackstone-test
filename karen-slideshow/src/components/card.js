import React from 'react';
import './card.css';
import Button from './button';

const Card = (props) => {
  return (
    <dl className="card">
      <dt className="card-header">
        <img src={props.picture} alt={props.name}/>
        <h3>{props.name}</h3>
      </dt>
      <dt className="card-body">
      <img/>
        <p>{props.debut}</p>
        <p>{props.episodes}</p>
        <p>{props.voice}</p>
      </dt>
    </dl>
  )
}

export default Card;
