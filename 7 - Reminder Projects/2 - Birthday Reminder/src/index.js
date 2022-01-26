//#region Import
//React Imports
import react, { useState } from "react";
import reactDom from "react-dom";

//People List Import
import { people } from "./people";

//Person Component Import

//CSS Import
import "./index.css";
//#endregion Import
//Main Component
const Index = () => {
  const [list, setList] = useState(people);
  const clearAll = () => {
    setList([]);
  };
  const remove = (id) => {
    let newList = list.filter((person) => {
      return person.id !== id;
    });
    setList(newList);
    console.log(id);
  };
  return (
    <section id="mainContainer">
      <h2 id="header">Birthday Reminder!</h2>
      <section id="container">
        {list.map(({ img, age, id, name, surname }) => {
          return (
            <section className="person" key={id}>
              <div className="fullName">
                <p className="name">{name}</p>
                <p className="surname">{surname}</p>
              </div>
              <img src={img} alt="" className="img" />
              <div className="age">{age} Years Old</div>
              <button className="removeBtn" onClick={() => remove(id)}>
                X
              </button>
            </section>
          );
        })}
      </section>
      <div id="btnDiv">
        <button id="btn" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
};

//Render
reactDom.render(<Index />, document.getElementById("root"));
