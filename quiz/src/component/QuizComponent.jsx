import React, { Component } from 'react';
import "./QuizComponent.css";

class QuizComponent extends Component {
  render() {
    return (
      <div className="quiz-container">
        <h2>Question</h2>
        <p className="question-number">1 of 15</p>
        <ul className="option-list">
          <li>Dog</li>
          <li>Elephant</li>
          <li>Goat</li>
          <li>Lion</li>
        </ul>
        <div className="button-container">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
