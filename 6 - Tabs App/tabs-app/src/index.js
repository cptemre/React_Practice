import React from "react";
import ReactDom from "react-dom";
import Tabs from "./Tabs.js";
import "./index.css";

const Component = () => {
  return <Tabs />;
};

ReactDom.render(<Component />, document.getElementById("root"));
