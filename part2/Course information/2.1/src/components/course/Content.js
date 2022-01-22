import React from "react";
import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      {props.parts.map(e =>
      <Part key={e.id} part={e.name} exercises={e.exercises} />)}
    </div>
  );
};
export default Content;
