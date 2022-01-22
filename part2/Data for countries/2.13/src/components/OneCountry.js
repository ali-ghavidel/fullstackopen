import React from "react";
const OneCountry = ({ filtered }) => {
    return (
      <div>
        <h2>{filtered.name.common}</h2>
        <p>capital {filtered.capital}</p>
        <p>population {filtered.population}</p>
        <ul>
          Languages
          {Object.keys(filtered.languages).map((key, index) => {
            return <li key={index}>{filtered.languages[key]}</li>;
          })}
        </ul>
        <div>
          <img src={filtered.flags.png} alt={filtered.languages.common} />
        </div>
      </div>
    );
  };

  export default OneCountry;