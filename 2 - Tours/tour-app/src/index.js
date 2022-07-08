import React from "react";
import ReactDom from "react-dom";
import Tour from "./Tour.js";
import "./index.css";
const Component = () => {
  return <Tour />;
};

ReactDom.render(<Component />, document.getElementById("root"));
