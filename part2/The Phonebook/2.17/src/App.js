import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/contacts";
// import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const deleteHandler = (i) => {
    console.log(persons[i].id);
    window.confirm(`Delete ${persons[i].name} ?`)
      ? personService
          .deleteOne(persons[i].id)
          .then(() =>{
            setPersons(persons.filter((item) => item.id !== persons[i].id))
            alert(`${persons[i].name} deleted!`)
          })
          .catch(() => console.log("error"))
      : alert("doesn't deleted")
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 2,
    };
    if (persons.some((x) => x.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} is already added to phonebook`);
    } else if (persons.some((x) => x.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else if (!newName || !newNumber) {
      alert(`please fill all fields`);
    } else {
      personService.create(newNameObject).then((newUser) => {
        setPersons(persons.concat(newUser));
        setNewName("");
        setNewNumber("");
      });
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
      <Persons
        persons={persons}
        filter={filter}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};
export default App;
