import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import database from "./database.js";
const App = () => {
  return (
    <section id="section">
      <h2 id="header">Q&A</h2>
      <article id="questions">
        {database.map((data) => {
          const { id, question, answer } = data;
          return (
            <div key={id} className="questions">
              <article className="article">
                <h3 className="questionsHeader">{question}</h3>
                <span id={id} className="span">
                  {answer}
                </span>
              </article>
              <button
                className="btn"
                onClick={(e) => {
                  const myArray = document.getElementsByTagName("span");
                  const mySpan = myArray[id];
                  if (e.target.innerHTML === "+") {
                    e.target.innerHTML = "-";
                    mySpan.style.display = "block";
                  } else {
                    e.target.innerHTML = "+";
                    mySpan.style.display = "none";
                  }
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default App;
