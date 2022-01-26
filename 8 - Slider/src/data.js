import React from "react";
const Data = ({ img, name, job, letter }) => {
  return (
    <div className="reviewContainer">
      <img src={img} alt={name} id="img" />
      <div id="person">
        <h3 id="name">{name}</h3>
        <h4 id="job">{job}</h4>
      </div>
      <p id="review">{letter}</p>
      <div id="sign">"</div>
    </div>
  );
};

export default Data;
