import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EquationGame from './EquationGame.js';

class App extends Component {
  //didn't need to calculate initial values so didn't need to add constructor
  state = {
    numQuestions: 0,
    numCorrect: 0
  }

incrementNumQuestions = () => {
  this.setState((currentState) => ({
    numQuestions: currentState.numQuestions +1
  }))
}

updateNumCorrect = () => {
  this.setState((currentState) => ({
   	 numCorrect: currentState.numCorrect +1
  }))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
         <EquationGame 
    		updateCorrect={this.updateNumCorrect}   //passing in callbacks
			updateQuestionCount={this.incrementNumQuestions}
			/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;