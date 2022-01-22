import React from "react";
import OneCountry from "./OneCountry";
const Filter = ({ filtered, setShow, setBool }) => {
  const clickHandler = (e) => {
    setShow(e);
    setBool(true);
  };

  if (filtered.length <= 9 && filtered.length > 1) {
    return filtered.map((e, i) => {
      return (
        <div key={i}>
          <p key={i}>
            {e.name.common}
            <button
              onClick={() => clickHandler(i)}
              key={i}
              value={[filtered[i]]}
            >
              show
            </button>
          </p>
        </div>
      );
    });
  } else if (filtered.length === 1) {
    return <OneCountry filtered={filtered[0]} />;
  } else {
    return <p>Too many matches,specify another filter</p>;
  }
};
export default Filter;
