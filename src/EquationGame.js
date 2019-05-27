
import React, {Component} from 'react';

class EquationGame extends Component {
  constructor(props) {  //need constructor as we are calculating initial values
   super(props);    //bad practice to initialise state from props
    const initialQuestion = this.createQuestion();
    this.state = {
     value1: initialQuestion[0],
     value2: initialQuestion[1],
     value3: initialQuestion[2],
     proposedAnswer: initialQuestion[3] 
    }
  }
  
  createQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];  // create array of initial data 
  }

  onButtonClicked = (selectedValue) => {
   const answer = this.evaluateAnswer();
    if((selectedValue === true && answer === true) || (selectedValue === false && answer === false)) {
      this.props.updateCorrect();
    }
    this.props.updateQuestionCount();
    const newQuestion = this.createQuestion();
    this.setState((current) => ({
     value1: newQuestion[0],
     value2: newQuestion[1],
     value3: newQuestion[2],
     proposedAnswer: newQuestion[3] 
    }))
  }
    
    evaluateAnswer = () => {
       const realAnswer = this.state.value1 + this.state.value2 + this.state.value3;
       return realAnswer === this.state.proposedAnswer;
    }

  render() {
     const {value1, value2, value3, proposedAnswer} = this.state; // destructure state object - neater than having to say this.state.value everywhere
      return (
        <div>
        <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button 
      onClick={() => this.onButtonClicked(true)}>
      True</button>
          <button 
      onClick={() => this.onButtonClicked(false)}>
      False</button>
    </div>
        );
    }
}

export default EquationGame;
