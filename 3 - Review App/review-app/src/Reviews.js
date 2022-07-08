import React, { useState, useEffect } from "react";
import list from "./list";

const Reviews = () => {
  const [myList, setmyList] = useState(list[0]);
  // Left-Right Button Functions
  const btnRight = () => {
    if (myList.id === 3) {
      setmyList(list[0]);
    } else {
      setmyList(list[myList.id + 1]);
    }
  };
  const btnLeft = () => {
    if (myList.id === 0) {
      setmyList(list[list.length - 1]);
    } else {
      setmyList(list[myList.id - 1]);
    }
  };
  // Random Button Function
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomBtn = () => {
    let randomNumber = randomIntFromInterval(0, list.length - 1);
    console.log(randomNumber);
    while (randomNumber === myList.id) {
      randomNumber = randomIntFromInterval(0, list.length - 1);
      console.log("same");
    }
    setmyList(list[randomNumber]);
  };
  let { id, img, name, job, review } = myList;
  useEffect(() => {
    document.title = name + "'s Review";
  }, [name]);
  return (
    <section id="sectionDiv">
      <h1>Our Reviews</h1>
      <article key={id} id="articleDiv">
        <div id="imgDiv">
          <div id="firstImg">&rdquo;</div>
          <img src={img} alt="" />
          <div id="lastImg"></div>
        </div>
        <div id="reviewDiv">
          <h4 id="name">{name}</h4>
          <h5 id="job">{job}</h5>
          <p id="review">{review}</p>
          <div id="btnDiv">
            <button className="btn" onClick={() => btnLeft()}>
              &larr;
            </button>
            <button className="btn" onClick={() => btnRight()}>
              &rarr;
            </button>
          </div>
          <button id="random" onClick={() => randomBtn()}>
            Random
          </button>
        </div>
      </article>
    </section>
  );
};

export default Reviews;
