import React, { useState, useEffect } from "react";
import list from "./list.js";
const Tours = () => {
  const [text, settext] = useState(true);
  const [myList, setmyList] = useState(list);
  const [isLoading, setisLoading] = useState(true);
  const click = () => {
    settext(!text);
  };

  const btnClick = (id) => {
    let newList = myList.filter((data) => {
      return data.id !== id;
    });
    setmyList(newList);
  };
  useEffect(() => {
    let length = myList.length;
    document.title = length + " Tours are available";
  }, [myList]);
  useEffect(() => {
    setisLoading(false);
  }, []);
  if (isLoading) {
    return (
      <section id="section">
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <section id="section">
        <h1>Our Tours</h1>

        {myList.map((data) => {
          const { id, img, header, price, article } = data;

          return (
            <div key={id} className="tours">
              <img src={img} alt="" />
              <div className="headerDiv">
                <span>{header}</span>
                <span className="price">{price}</span>
              </div>
              <p className="article">
                {text ? article.slice(0, 100) : article}
                <span className="read" onClick={() => click()}>
                  {text ? "...Read More" : "...Show Less"}
                </span>
              </p>
              <button className="btn" onClick={() => btnClick(id)}>
                Not Interested
              </button>
            </div>
          );
        })}
      </section>
    );
  }
};

export default Tours;
