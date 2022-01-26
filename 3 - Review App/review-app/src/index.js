import React from "react";
import ReactDom from "react-dom";
import Reviews from "./Reviews";
import "./index.css";
const Component = () => {
  return <Reviews />;
};

ReactDom.render(<Component />, document.getElementById("root"));
