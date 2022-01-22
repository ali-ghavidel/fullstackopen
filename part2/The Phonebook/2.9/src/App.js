import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");

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
    setFilter(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <input onChange={search} value={filter} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={nameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={numberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter(
          (e) =>
            e.name.toUpperCase().includes(filter.toUpperCase()) || filter === ""
        )
        .map((e) => (
          <p key={e.name}>
            {" "}
            {e.name} {e.number}
          </p>
        ))}
    </div>
  );
};
export default App;
