import React, { useState } from "react";

const Tour = ({ id, img, title, price, letter }) => {
  const [newLetter, setNewLetter] = useState(letter.substr(0, 100) + "...");
  const [showMore, setShowMore] = useState("Show More");

  const removeItem = (e) => {
    e.remove();
  };
  const showFunc = () => {
    if (newLetter.length === 103) {
      setNewLetter(letter);
      setShowMore("Show Less");
    } else {
      setNewLetter(letter.substr(0, 100) + "...");
      setShowMore("Show More");
    }
  };

  return (
    <div className="tour">
      <div className="imgDiv">
        <img src={img} alt={title + " image"} />
      </div>
      <div className="titleDiv">
        <span className="title">
          <h4>{title}</h4>
        </span>
        <span className="priceSpan">
          <h5 className="price">{price}</h5>
        </span>
      </div>
      <p>
        {newLetter}{" "}
        <span className="show" onClick={showFunc}>
          {showMore}
        </span>
      </p>
      <button onClick={(e) => removeItem(e.currentTarget.parentElement)}>
        Dismiss
      </button>
    </div>
  );
};

export default Tour;
