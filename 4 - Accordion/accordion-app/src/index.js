import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import "./index.css";
const Component = () => {
  return <App />;
};

ReactDom.render(<Component />, document.getElementById("root"));
