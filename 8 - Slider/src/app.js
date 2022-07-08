import react, { useState, useEffect } from "react";
import datas from "./datas";
import Data from "./data";

const App = () => {
  //useState
  const [count, setCount] = useState(0);
  const [newData, setNewData] = useState(datas);
  let revCon = document.getElementsByClassName("reviewContainer");

  const increase = () => {
    if (count >= newData.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      revCon[0].style.animation = "";
    }, 100);
    let timer = setTimeout(() => {
      revCon[0].style.animation = "slideLeft 6s";
    }, 4000);
    let timer2 = setTimeout(() => {
      increase();
      revCon[0].style.animation = "slideLeft2 3s";
    }, 4400);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [count]);

  const left = () => {
    if (count === 0) {
      setCount(newData.length - 1);
    } else {
      setCount(count - 1);
    }
    revCon[0].style.animation = "slideLeft 6s";
  };
  const leftClick = () => {
    left();
  };

  const right = () => {
    increase();
    revCon[0].style.animation = "slideLeft2 3s";
  };

  const rightClick = () => {
    right();
  };

  const keydown = (e) => {
    if (e.keyCode === 39) {
      if (count >= newData.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
      console.log(count);
      revCon[0].style.animation = "slideLeft2 3s";
      console.log("right");
    }
    if (e.keyCode === 37) {
      left();
      console.log("left");
    }
    document.removeEventListener("keyup", keydown);
  };

  document.addEventListener("keyup", keydown);
  return (
    <div id="mainContainer">
      <div id="headerDiv">
        <span id="slash">/</span>
        <h2 id="header">Reviews</h2>
      </div>
      <div id="lastContainer">
        <div className="arrows" id="leftDiv">
          <span className="arrowSpan" onClick={leftClick}>
            &#8606;
          </span>
        </div>
        <Data key={newData.id} {...newData[count]} />

        <div className="arrows" id="rightDiv">
          <span className="arrowSpan" onClick={rightClick}>
            &#8608;
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
