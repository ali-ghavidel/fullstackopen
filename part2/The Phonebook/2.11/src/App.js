import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios';
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");


  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.some((x) => x.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} is already added to phonebook`);
    } else if (persons.some((x) => x.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else if (!newName || !newNumber) {
      alert(`please fill all fields`);
    } else {
      setPersons(persons.concat(newNameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const nameChange = (event) => {
    setNewName(event.target.value);
    //done
  };
  const numberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const search = (event) => {
    console.log("a");
    setFilter(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={search} value={filter} />

      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        nameChange={nameChange}
        newName={newName}
        numberChange={numberChange}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};
export default App;
