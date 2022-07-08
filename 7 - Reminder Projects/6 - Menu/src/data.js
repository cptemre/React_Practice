import React from "react";

const Data = ({ img, title, price, letter, buttonClass }) => {
  return (
    <div className="dataContainer">
      <img src={img} alt={title} className="imgs" />
      <div className="infoDiv">
        <div className="titleDiv">
          <h3 className="title">{title}</h3>
          <h4 className="price">{price}</h4>
        </div>
        <div className="letterDiv">{letter}</div>
      </div>
    </div>
  );
};

export default Data;
