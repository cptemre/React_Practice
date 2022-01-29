import React from "react";

const Item = ({ title }) => {
  return (
    <div className="itemsContainer">
      <p className="item">{title}</p>
      <div className="iconsContainer">
        <i className="fas fa-check check"></i>
        <i className="fas fa-pencil-alt edit"></i>
        <i className="fas fa-trash-alt delete"></i>
      </div>
    </div>
  );
};

export default Item;
