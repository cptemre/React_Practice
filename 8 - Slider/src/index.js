import react from "react";
import reactDom from "react-dom";
import App from "./app";
import "./index.css";

reactDom.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById("root")
);
