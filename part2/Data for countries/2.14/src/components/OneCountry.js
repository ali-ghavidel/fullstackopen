import React, { useEffect, useState } from "react";
import axios from "axios";

const OneCountry = ({ filtered }) => {
  const [temp, setTemp] = useState();
  const [image, setImage] = useState();
  const [wind, setWind] = useState();
  const [windDeg, setWindDeg] = useState();
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${filtered.capital}&appid=${api_key}`
      )
      .then((response) => {
        setTemp(response.data.main.temp);
        setImage(
          `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
        );
        setWind(response.data.wind.speed);

        setWindDeg(Math.round((response.data.wind.deg / 22.5 + 0.5) % 16));
      });
  }, [api_key, filtered.capital, image, windDeg]);

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
      <div>
        <h2>Weather in {filtered.capital}</h2>
        <p>
          <b>temprature:</b> {Math.round(temp - 273)}
        </p>
        <img src={image} alt="icon" />
        <p>
          <b>wind:</b> {Math.round(wind * 2.237)} mph direction {arr[windDeg]}{" "}
        </p>
      </div>
    </div>
  );
};

export default OneCountry;
