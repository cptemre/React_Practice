import React from "react";
import reactDom from "react-dom";

import datas from "./data";
import Faq from "./faq";

import "./index.css";

const Index = () => {
  return (
    <div id="mainContainer">
      <h2>FAQ</h2>
      <div id="container">
        {datas.map((data) => {
          return <Faq key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

reactDom.render(<Index />, document.getElementById("root"));
