import React from "react";
import ReactDom from "react-dom";
import Section from "./Names.js";
import { useState } from "react";
import "./index.css";

const FirstComponent = () => {
  return <Section />;
};

ReactDom.render(<FirstComponent />, document.getElementById("root"));
