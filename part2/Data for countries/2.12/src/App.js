import React, { useState, useEffect } from "react";
import axios from "axios";

const Filter  = ({countries, filter}) => {
  const filtered = countries.filter(f => f.name.common.toUpperCase().includes(filter.toUpperCase()) || filter==='')
  if(filtered.length <= 9 && filtered.length > 1){
  return(
      filtered.map(e => <p key={e.name.common}>{e.name.common}</p>)
  )
  }else if(filtered.length === 1){
    return(
      <div>
        <h2>{filtered[0].name.common}</h2>
        <p>capital {filtered[0].capital}</p>
        <p>population {filtered[0].population}</p>
        <ul>
          Languages
          {Object.keys(filtered[0].languages).map((key, index) =>
          {
            return <li key={index}>{filtered[0].languages[key]}</li>
          }
          )}
        </ul>
        <div>
          <img src={filtered[0].flags.png} alt={filtered[0].languages.common} />
        </div>
      </div>
    )
  }else{
    return <p>Too many matches,specify another filter</p>
  }
}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);
  const search = (event) => {
    setFilter(event.target.value);
  };
  
  return (
    <div>
      <div>
        find countries <input onChange={search} value={filter} />
      </div>
      <div>
        <Filter countries={countries} filter={filter} />
      </div>
    </div>
  );
};
export default App;
