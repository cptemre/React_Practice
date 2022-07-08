//#region
// React Imports
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

// Component and Data Imports
import tours from "./tours";
import Tour from "./tour";

//CSS Import
import "./index.css";
//#endregion
const Index = () => {
  //#region Loading useState
  const [loading, setLoading] = useState(
    <div>
      <div id="mainHeader">
        <h1>Loading...</h1>
        <div id="underline"></div>
      </div>
    </div>
  );
  //#endregion Loading useState

  //#region Loading useEffect

  useEffect(() => {
    setTimeout(() => {
      setLoading(
        <div>
          <div id="mainHeader">
            <h1>Touristic Tours</h1>
            <div id="underline"></div>
          </div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      );
    }, 2000);
  }, []);

  //#endregion Loading useEffect

  return loading;
};

ReactDom.render(<Index />, document.getElementById("root"));
