import React from "react";

/*const sum = (props) => {
  let total = 0;
  for(let i=0; i<props.parts.length; i++)
          {
            total += props.parts[i].exercises;
          }
          return total;
}*/
const sum = (props) => {
  let initialValue = 0;
  let sum = props.parts.reduce((prev,now) => prev + now.exercises ,initialValue);
  return sum;
}
const Total = (props) => {
    return (
        <p>
          <b>
          Number of exercises{" "}
          {sum(props)}
          </b>
        </p>
      );
}
export default Total;