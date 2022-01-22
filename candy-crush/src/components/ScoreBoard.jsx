import React from 'react';
import "./ScoreBoard.scss"

const ScoreBoard = (props) => {
  const {score } = props
  let response = "Keep Going"
  if (score > 50 && score < 125) {
    response = "Well Done"
  } else if (score >= 125 && score < 200) {
    response = "Your doing great keep going!"
  }else if (score >= 200){
    response = "Your a real Candy Crusher!"
  }
  return ( 
  <div className="score-board">
    <h2> Score: {score}</h2>
    <h3>{response}</h3>
  </div>
  )
};

export default ScoreBoard;
