import React from "react";
import reactDom from "react-dom";
import App from "./app";
import "./index.css";

reactDom.render(
  <React.StrictMode>
    <App key={0} />
  </React.StrictMode>,
  document.getElementById("root")
);
