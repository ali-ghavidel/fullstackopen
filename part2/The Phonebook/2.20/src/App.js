import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/contacts";
import Notification from "./components/Notification";
// import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");
  const [erorrMessage, setErorrMessage] = useState([null,"good"])

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
          .then(() => {
            setPersons(persons.filter((item) => item.id !== persons[i].id));
            alert(`${persons[i].name} deleted!`);
          })
          .catch(() => console.log("error"))
      : alert("doesn't deleted");
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.some((x) => x.name.toUpperCase() === newName.toUpperCase())) {
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new number?`
      )
        ? personService.updateOne(newNameObject, persons).then((e) => {
            // console.log(e);
            const newPersons = [...persons];
            // console.log(newPersons,'new persons');
            newPersons.find((i) => i.id === e.id).number = e.number;
            setPersons(newPersons);
            setErorrMessage([`Updated ${newNameObject.name}`,'good'])
            setTimeout(() => {
              setErorrMessage([null,'good'])
            }, 4000);
          }).catch( error => 
            {
              setErorrMessage([`Information of ${newNameObject.name} has already been removed from server`,'bad'])
              setTimeout(() => {
                setErorrMessage([null,'good'])
              }, 4000);
            }
            )
        : alert(`${newName} doesn't change!`);
    } else if (persons.some((x) => x.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else if (!newName || !newNumber) {
      alert(`please fill all fields`);
    } else {
      personService.create(newNameObject).then((newUser) => {
        setPersons(persons.concat(newUser));
        setNewName("");
        setNewNumber("");
        setErorrMessage([`Added ${newNameObject.name}`,'good'])
        setTimeout(() => {
          setErorrMessage([null,'good'])
        }, 4000);
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
      <Notification message={erorrMessage} />
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
