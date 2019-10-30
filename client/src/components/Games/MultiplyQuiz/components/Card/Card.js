import React from "react";
import Button from "../Button/Button";
import "./multiplyCard.css";

const Card = props => {
  return (
    <div className="container">
      <div id="multiplycard" className="card" clicked={props.clicked}>
        <div className="row m-auto pt-2" id="propsQuestions"> {props.question}</div>
        <div className="row"><Button answers={props.answers} correctAnswer={props.correctAnswer} testClick={props.testClick} /></div>
      </div>
    </div>
  );
};

export default Card;
