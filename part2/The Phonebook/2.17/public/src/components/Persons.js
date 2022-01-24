import React from "react";

const Persons = (props) => {
  return (
    <div>
      {props.persons
        .filter(
          (e) =>
            e.name.toUpperCase().includes(props.filter.toUpperCase()) || props.filter === ""
        )
        .map((e, i) => (
          <p key={i}>
            {" "}
            {e.name} {e.number}<button key={i} onClick={() => props.deleteHandler(i)}>delete</button>
          </p>
        ))}
    </div>
  );
};
export default Persons;