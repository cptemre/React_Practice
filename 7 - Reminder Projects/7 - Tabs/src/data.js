import React from "react";
import datas from "./datas";

const Data = ({ name, job, startDate, endDate, letter1, letter2, letter3 }) => {
  return (
    <div id="articleContainer">
      <div id="jobContainer">
        <h2 id="job">{job}</h2>
        <h4 id="name">{name}</h4>
        <div id="date">
          <span id="startDate">{startDate} -</span>
          <span id="endDate"> {endDate}</span>
        </div>
      </div>
      <div id="list">
        <li className="letters">{letter1}</li>
        <li className="letters">{letter2}</li>
        <li className="letters">{letter3}</li>
      </div>
    </div>
  );
};

export default Data;
