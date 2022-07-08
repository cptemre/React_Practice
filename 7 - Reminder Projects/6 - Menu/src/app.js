import React, { useState } from "react";
import { datas } from "./datas";
import Data from "./data";

const App = () => {
  const [myArray, setMyArray] = useState(datas);

  const clickFunc = (a) => {
    if (a === "All") {
      setMyArray(datas);
    } else {
      datas.forEach((e) => {
        // for each datas array item checks if object key is equal to breakfast
        for (const buttonClass in e) {
          if (e[buttonClass] === a) {
            let filtered = datas.filter((i) => {
              return i.buttonClass === a;
            });
            setMyArray(filtered);
          }
        }
      });
    }
  };

  return (
    <div id="mainContainer">
      <div id="headerDiv">
        <h1 id="header">Menu</h1>
        <div id="underline"></div>
      </div>
      <div id="buttonDiv">
        <button
          className="buttons"
          onClick={(e) => clickFunc(e.currentTarget.innerHTML)}
        >
          All
        </button>
        <button
          className="buttons"
          onClick={(e) => clickFunc(e.currentTarget.innerHTML)}
        >
          Breakfast
        </button>
        <button
          className="buttons"
          onClick={(e) => clickFunc(e.currentTarget.innerHTML)}
        >
          Dinner
        </button>
        <button
          className="buttons"
          onClick={(e) => clickFunc(e.currentTarget.innerHTML)}
        >
          Dessert
        </button>
      </div>
      <div id="menuContainer">
        {myArray.map((data) => {
          return <Data key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default App;
