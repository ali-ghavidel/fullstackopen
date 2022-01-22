import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import OneCountry from "./components/OneCountry";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState(-1);
  const [bool, setBool] = useState(false);

  // useeffect to avoid too many renders and render just when countries and filter states changed
  useEffect(() => {
    const x = countries.filter(
      (f) =>
        f.name.common.toUpperCase().includes(filter.toUpperCase()) ||
        filter === ""
    );
    setFiltered(x);
  }, [countries, filter]);

  // get data from restcountries.com
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);
  // input change handler
  const search = (event) => {
    setFilter(event.target.value);
    setShow(-1);
  };

  return (
    <div>
      <div>
        find countries <input onChange={search} value={filter} />
      </div>
      <div>
        <Filter filtered={filtered} setShow={setShow} setBool={setBool} />
      </div>
      <div>
        {/* to show if pressed show button */}
        {filtered[show] && bool && <OneCountry filtered={filtered[show]} />}
      </div>
    </div>
  );
};
export default App;
