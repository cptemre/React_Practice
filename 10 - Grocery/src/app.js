import React, { useState, useEffect } from "react";
import $, { data } from "jquery";

//set first list on load from local storage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const App = () => {
  const item = `<div class="itemsContainer">
          <p class="item">Eggs</p>
          <div class="iconsContainer">
            <i class="fas fa-check check"></i>
            <i class="fas fa-pencil-alt edit"></i>
            <i class="fas fa-trash-alt delete"></i>
          </div>
        </div>`;
  //useState
  const [isAdded, setIsAdded] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  //Functions
  //Get From Local Storage in the load

  //localStorage.clear();
  //Submit
  const clickFunc = (e) => {
    e.preventDefault();
    if (value.trim("") !== "") {
      //Variables
      let p = '<p id="noticeGreen">Item is added to the list</p>';
      //Information of add/remove
      $(p).insertBefore("#header");
      //Remove info
      setTimeout(() => {
        $("#noticeGreen").remove();
      }, 2000);
      let date = new Date().getTime().toString();
      let data = { id: date, title: value };
      setList([...list, data]);
      console.log(list);
    }
    console.log("clicked");
    //To reset input value
    setValue("");
    //Forr useEffect to run after click
    setIsAdded(!isAdded);
  };
  //SetValue
  const valueFunc = (e) => {
    //Let you write inside input
    setValue(e);
  };
  //Icon actions
  const iconFunc = (e) => {
    console.log(e);
  };
  //LocalStorage set and add items
  const localStorageFunc = () => {
    let stringfy = JSON.stringify(list);
    $("#itemsContainer").empty();
    localStorage.setItem("list", stringfy);
    console.log(localStorage);
    for (const key in list) {
      $("#itemsContainer").append(item);
      $(".item").eq(key).html(list[key].title);
    }
  };
  //Add item After Render
  useEffect(() => {
    localStorageFunc();
    //burdan devam
    $(".delete").mouseup(function () {
      console.log($(this).parent().parent().children(":first").html());
      let filter = list.filter((data) => {
        console.log(data.title);
        return (
          data.title != $(this).parent().parent().children(":first").html()
        );
      });
      let stringfy = JSON.stringify(filter);
      $("#itemsContainer").empty();
      localStorage.setItem("list", stringfy);
      console.log(localStorage);
      for (const key in filter) {
        $("#itemsContainer").append(item);
        $(".item").eq(key).html(filter[key].title);
      }
    });
  }, [isAdded]);

  return (
    <div id="mainContainer">
      <div id="headerContainer">
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
            value={value}
            onChange={(e) => valueFunc(e.target.value)}
          />
          <button type="submit" id="btn" onClick={(e) => clickFunc(e)}>
            Submit
          </button>
        </div>
      </div>
      <div id="itemsContainer"></div>
    </div>
  );
};

export default App;
