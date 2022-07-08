import React, { useState, useEffect } from "react";

const Faq = ({ question, answer }) => {
  //useStates
  const [newButton, setNewButton] = useState("+");
  const [newAnswer, setNewAnswer] = useState("");
  //Functions
  const buttonClick = () => {
    if (newButton === "+") {
      setNewButton("-");
      setNewAnswer(answer);
    } else {
      setNewButton("+");
      setNewAnswer("");
    }
  };
  return (
    <div className="questionContainer">
      <div className="questionDiv">
        <h3 className="questions">{question}</h3>
        <div className="buttonsDiv">
          <button className="buttons" onClick={buttonClick}>
            {newButton}
          </button>
        </div>
      </div>
      <p className="answers">{newAnswer}</p>
    </div>
  );
};

export default Faq;
