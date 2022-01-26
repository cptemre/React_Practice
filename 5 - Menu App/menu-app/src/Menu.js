import React, { useState } from "react";
import data from "./data.js";

const Menu = () => {
  const [filter, setFilter] = useState(data);

  const click = (e) => {
    const newData = data.filter((service) => {
      return service.type === e.target.innerHTML;
    });
    console.log(e.target.innerHTML);
    console.log(newData);
    setFilter(newData);
  };
  const clickAll = () => {
    setFilter(data);
  };
  return (
    <section id="section">
      <div className="header">Our Menu</div>
      <div id="btnDiv">
        <button className="btns" onClick={clickAll}>
          All
        </button>
        <button className="btns" onClick={click}>
          Breakfast
        </button>
        <button className="btns" onClick={click}>
          Lunch
        </button>
        <button className="btns" onClick={click}>
          Shakes
        </button>
      </div>
      <div id="mainDiv">
        {filter.map((service) => {
          const { id, img, name, article, price } = service;
          return (
            <div key={id} className="serviceDiv">
              <img src={img} alt={name} />
              <div className="right">
                <div className="nameDiv">
                  <span className="name">{name}</span>
                  <span className="price">{price}</span>
                </div>
                <p className="article">{article}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
