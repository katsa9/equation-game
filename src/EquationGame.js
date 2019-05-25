import React, {Component} from 'react';

class EquationGame extends Component {
  constructor(props) {
   super(props);
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
    return [value1, value2, value3, proposedAnswer];
  }
  
  state = {
    value1: "",
    value2: "",
    value3: "",
    proposedAnswer: ""
  }
 	render() {
     const {value1, value2, value3, proposedAnswer} = this.state;
      return (
        <div>
        <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
		</div>
        );
    }
}

export default EquationGame;