import React from "react";

const App = () => {
  return (
    <div id="mainContainer">
      <div id="headerContainer">
        <div>
          <p className="notice">Item is added to the list</p>
        </div>

        <h1 id="header">
          To <span id="flick1">D</span>o L<span id="flick2">i</span>
          st
        </h1>
        <div id="inputContainer">
          <input
            placeholder="e.g. Milk"
            type="text"
            id="input"
            name="input"
            value=""
          />
          <button type="submit" id="btn">
            Submit
          </button>
        </div>
      </div>
      <div id="itemsContainer">
        <div className="itemsContainer">
          <p className="item">Eggs</p>
          <div className="iconsContainer">
            <i className="fas fa-check" id="check"></i>
            <i className="fas fa-pencil-alt" id="edit"></i>
            <i className="fas fa-trash-alt" id="delete"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
