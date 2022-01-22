import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "39-445323523" },
  ]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((e) => (
        <p key={e.name}>
          {" "}
          {e.name} {e.number}
        </p>
      ))}
    </div>
  );
};
export default App;
