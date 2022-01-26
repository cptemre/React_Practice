import React, { useState } from "react";
import datas from "./datas";
import Data from "./data";

const App = () => {
  let names = document.getElementsByClassName("names");

  //useState
  const [count, setCount] = useState(0);
  //To avoid async

  setTimeout(() => {
    names[count].style.color = "blue";
  }, 1);
  const clickFunc = (e) => {
    let parent = e.currentTarget.parentElement.parentElement;
    let index = [...parent.children].indexOf(e.currentTarget.parentElement);
    if (count !== index) {
      names[count].style.color = "black";
    }
    setCount(index);
  };
  return (
    <div id="mainContainer">
      <div id="headerDiv">
        <h1 id="header">Experience</h1>
        <div id="underline"></div>
      </div>
      <div id="secondContainer">
        <div id="namesContainer">
          {datas.map((data) => {
            return (
              <div className="undefined">
                <div className="line"></div>
                <div className="names" onClick={(e) => clickFunc(e)}>
                  {data.name}
                </div>
              </div>
            );
          })}
        </div>
        <Data key={1} {...datas[count]} />
      </div>
      <button id="button">More Info</button>
    </div>
  );
};

export default App;
