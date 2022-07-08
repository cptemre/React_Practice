import React, { useState, useEffect } from "react";
import data from "./data.js";

const Tabs = () => {
  const [myArray, setMyArray] = useState(data[0]);
  const {
    id,
    job,
    name,
    dateBeginning,
    dateEnding,
    article1,
    article2,
    article3,
  } = myArray;

  useEffect(() => {
    const buttons = document.getElementsByClassName("btns");
    buttons[0].style.color = "rgb(106, 106, 236)";
  }, []);
  const btnClick = (e) => {
    const buttons = document.getElementsByClassName("btns");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "black";
    }
    e.target.style.color = "rgb(106, 106, 236)";
    const filterData = data.filter((newData) => {
      return newData.name === e.target.innerHTML;
    });
    setMyArray(data[filterData[0].id]);
  };
  return (
    <div id="mainContainer">
      <div id="header">Experience</div>
      <div id="down">
        <div id="names">
          {data.map((newData) => {
            return (
              <button
                className="btns"
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgb(106, 106, 236)")
                }
                onMouseLeave={(e) => {
                  if (myArray.name !== e.target.innerHTML) {
                    e.target.style.color = "black";
                  }
                }}
                onClick={(e) => btnClick(e)}
              >
                {newData.name}
              </button>
            );
          })}
        </div>
        <div id="tab">
          <div id="job">{job}</div>
          <div id="name">
            <span id="spanName">{name}</span>
          </div>
          <div id="date">{dateBeginning + dateEnding}</div>
          <div id="list">
            <li>{article1}</li>
            <li>{article2}</li>
            <li>{article3}</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
