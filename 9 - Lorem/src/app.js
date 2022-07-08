import React, { useState, useEffect } from "react";
import datas from "./datas";

const App = () => {
  const [value, setValue] = useState("");
  const [newDatas, setNewDatas] = useState([]);

  const valueFunc = (e) => {
    setValue(e);
  };

  const clickFunc = (e) => {
    e.preventDefault();
    let dataSlice = [];
    let newSlice = [];
    // if value is bigger than data, repeat
    if (value >= datas.length - 1) {
      console.log("eşit");
      let multiple = value / datas.length - 1;
      let rest = (value % datas.length) - 1;
      while (multiple >= 0) {
        dataSlice = [...dataSlice, datas.slice(0, value)];
        multiple--;
      }
      dataSlice = [...dataSlice, datas.slice(0, rest + 1)];
      dataSlice.forEach((e) => {
        e.forEach((i) => {
          newSlice.push(i);
        });
      });
      setNewDatas(dataSlice[0]);
    } else {
      dataSlice = datas.slice(0, value);
      setNewDatas(dataSlice);
    }
  };

  useEffect(() => {
    document.getElementById("lorem").innerHTML = "";

    newDatas.map((data) => {
      let node = document.createElement("p");
      node.setAttribute("className", "newP");
      let textnode = document.createTextNode(data);
      node.appendChild(textnode);
      document.getElementById("lorem").appendChild(node);
    });
  }, [newDatas]);

  return (
    <div id="mainContainer">
      <h1 id="header">Lorem Ipsum Generater</h1>
      <div id="generateDiv">
        <label htmlFor="paragraphs" id="label">
          Paragraphs:{" "}
        </label>
        <input
          type="number"
          name="paragraphs"
          id="input"
          value={value}
          onChange={(e) => valueFunc(e.target.value)}
        />
        <div id="btnDiv">
          <button type="submit" onClick={(e) => clickFunc(e)}>
            Generate
          </button>
        </div>
      </div>
      <div id="lorem"></div>
    </div>
  );
};

export default App;
