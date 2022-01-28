import React, { useState, useEffect } from "react";
import Item from "./item";
import $ from "jquery";

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
  const submitBtn = `<button type="submit" id="submitBtn" class="btn" onClick='{(e) => clickFunc(e)}'>
            Submit
          </button>`;
  const editBtn = `<button type="submit" id="editBtn" class="btn">
            Edit
          </button>`;
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
      let data = { id: date, title: value, check: false };
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

  //LocalStorage set and add items
  const localStorageFunc = () => {
    let stringfy = JSON.stringify(list);
    $("#itemsContainer").empty();
    localStorage.setItem("list", stringfy);
    console.log(localStorage);
    for (const key in list) {
      $("#itemsContainer").append(item);
      $(".item").eq(key).html(list[key].title);
      if (list[key].check) {
        $(".item").eq(key).css("textDecoration", "line-through");
      } else {
        $(".item").eq(key).css("textDecoration", "none");
      }
    }
  };
  //Add item After Render
  useEffect(() => {
    localStorageFunc();
    //Delete Button
    $(".delete").mouseup(function () {
      $("#editBtn").remove();
      $("#submitBtn").show();
      setValue("");
      let x = $(this).parent().parent();
      for (const key in list) {
        if (list[key].title === x.children("p:first").html()) {
          //Delete DOM.Check value and filter it with new list. Set it to localStorage.
          $(x).remove();
          let filteredList = list.filter(
            (data) => data.title !== x.children("p:first").html()
          );
          let stringify = JSON.stringify(filteredList);
          localStorage.setItem("list", stringify);
        }
      }
    });
    //Edit Button
    $(".edit").mouseup(function () {
      //Find dom html. Set its value to input. Change button. On click edit prepare a new list.
      let x = $(this).parent().parent().children("p:first");
      $(".item").css("color", "white");
      $(x).css("color", "red");
      setValue(x.html());
      $("#editBtn").remove();
      $("#submitBtn").hide();
      $(editBtn).insertAfter("#input");
      $("#editBtn").mouseup(function () {
        $("#editBtn").remove();
        $("#submitBtn").show();
        x.html($("#input").val());

        let index = $(x.parent()).index();
        let filteredList = list;
        filteredList[index].title = $("#input").val();
        setList(filteredList);
        setIsAdded(!isAdded);
        $(x).css("color", "white");
        setValue("");
      });
    });
    $(".check").mouseup(function () {
      let x = $(this).parent().parent().children("p:first");
      let index = $(x.parent()).index();
      console.log(index);
      let filteredList = list;
      filteredList[index].check = !filteredList[index].check;
      let isTrue = filteredList[index].check;
      console.log(filteredList[index].check);
      console.log(list);
      console.log("clicked");
      setList(filteredList);

      if (isTrue) {
        $(x).css("textDecoration", "line-through");
      } else {
        $(x).css("textDecoration", "none");
      }
      setIsAdded(!isAdded);
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
          <button
            type="submit"
            id="submitBtn"
            className="btn"
            onClick={(e) => clickFunc(e)}
          >
            Submit
          </button>
        </div>
      </div>
      <div id="itemsContainer">
        {list.map((data) => {
          return <Item key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default App;
