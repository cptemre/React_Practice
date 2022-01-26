import React from "react";
import { useState, useBetween } from "react";

let people = [
  {
    id: 1,
    img: "https://scontent.fist4-1.fna.fbcdn.net/v/t1.6435-9/123314383_3652687778121705_8500375210549232657_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=ER7VlZ86nKEAX9lQwg-&_nc_ht=scontent.fist4-1.fna&oh=e68c02dac91be86a85ef04cfdcd581e3&oe=60FE87A0",
    name: "Justyna Sikora Kunduracı",
    age: "26",
  },
  {
    id: 2,
    img: "https://scontent.fist4-1.fna.fbcdn.net/v/t1.6435-9/128402765_3735886563135159_1034743070970716503_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=o6u9SAqbXUUAX_6ViM3&_nc_ht=scontent.fist4-1.fna&oh=dbdd849a629350d8c4ef71efbb12599b&oe=60FDA56C",
    name: "Ben Sikora",
    age: "9",
  },
  {
    id: 3,
    img: "https://scontent.fist4-1.fna.fbcdn.net/v/t1.6435-9/181690524_10224480565948951_4974663249653692217_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1bpjs6pNKcwAX8_UiFZ&_nc_ht=scontent.fist4-1.fna&oh=f350809c0d6fe2c3bb91df143240fd6d&oe=60FDD0C6",
    name: "Emre Kunduracı",
    age: "26",
  },
];
let peopleLength = people.length;

const Names = ({ number, setNumber, list, setList }) => {
  console.log(number);

  const deletePerson = (id) => {
    let newList = list.filter((person) => {
      return person.id !== id;
    });
    setNumber(number - 1);
    setList(newList);
  };
  return list.map((person) => {
    const { id, img, name, age } = person;

    return (
      <article key={id} className="people">
        <img src={img} alt="" width="100px" height="100px" />
        <div className="info">
          <h5>{name}</h5>
          <h5>{age}</h5>
          <button className="dismiss" onClick={() => deletePerson(id)}>
            Dismiss
          </button>
        </div>
      </article>
    );
  });
};

const Section = () => {
  const [number, setNumber] = useState(peopleLength);
  let [list, setList] = useState(people);

  const deletePerson = () => {
    setList([]);
    clearAll();
  };
  const clearAll = () => {
    setNumber(0);
  };
  return (
    <section id="section">
      <h2>
        <span id="number">{number}</span> birthdays
      </h2>
      <Names
        number={number}
        setNumber={setNumber}
        list={list}
        setList={setList}
      />
      <button id="clear" onClick={() => deletePerson()}>
        Clear All
      </button>
    </section>
  );
};

export default Section;
