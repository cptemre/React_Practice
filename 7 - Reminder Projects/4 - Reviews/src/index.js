import React, { useState } from "react";
import reactDom from "react-dom";

import Review from "./review";
//CSS
import "./index.css";

const Index = () => {
  return <Review />;
};

reactDom.render(<Index key={0} />, document.getElementById("root"));
