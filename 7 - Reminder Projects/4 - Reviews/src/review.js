import React, { useState, useEffect } from "react";
import { reviews } from "./reviews";

const Review = () => {
  //useState
  const [count, setCount] = useState(0);
  const [myList, setMyList] = useState(reviews[count]);
  //useEffect
  useEffect(() => {
    setMyList(reviews[count]);
    console.log("useeffect");
  }, [count]);
  //#region Click Functions

  // right click
  const increase = () => {
    if (count == reviews.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    console.log(count);
  };
  // left click

  const decrease = () => {
    if (count == 0) {
      setCount(reviews.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  // random click

  const randomButton = () => {
    let surprise = parseInt((Math.random() * (reviews.length - 1)).toFixed(0));
    // to avoid same number
    while (count === surprise) {
      surprise = parseInt((Math.random() * (reviews.length - 1)).toFixed(0));
    }
    setCount(surprise);
  };
  //#endregion Click Functions

  //Destruction of object
  let { img, name, job, letter } = { ...myList };

  return (
    <div id="container">
      <h1>Reviews</h1>
      <div id="underline"></div>
      <div id="imgDiv">
        <span id="imgSpan1">
          <span id="imgSpan2">
            <span id="imgSpan3">"</span>
          </span>
          <span id="imgSpan4">
            <img id="img" src={img} alt="" />
          </span>
        </span>
      </div>
      <div id="nameDiv">
        <p id="name">{name}</p>
        <p id="job">{job}</p>
      </div>
      <p id="letter">{letter}</p>
      <div id="buttonDiv">
        <div id="arrowDiv">
          <button className="buttons" id="left" onClick={decrease}>
            &#8606;
          </button>
          <button className="buttons" id="right" onClick={increase}>
            &#8608;
          </button>
        </div>
        <button className="buttons" id="random" onClick={randomButton}>
          Random
        </button>
      </div>
    </div>
  );
};

export default Review;
