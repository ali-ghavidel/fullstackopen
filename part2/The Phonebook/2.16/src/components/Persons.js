import React from "react";

const Persons = (props) => {
  return (
    <div>
      {props.persons
        .filter(
          (e) =>
            e.name.toUpperCase().includes(props.filter.toUpperCase()) || props.filter === ""
        )
        .map((e) => (
          <p key={e.name}>
            {" "}
            {e.name} {e.number}
          </p>
        ))}
    </div>
  );
};
export default Persons;