import React, { Component } from 'react';
import './HomeComponent.css';

class HomeComponent extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Quiz App</h1>
        <button>Play</button>
      </div>
    );
  }
}

export default HomeComponent;
