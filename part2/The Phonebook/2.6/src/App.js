import React, {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
    };
    setPersons(persons.concat(newNameObject));
    setNewName('');
  }

  const nameChange = (event) => {
    setNewName(event.target.value);
    //done
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={nameChange}  value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( e => <li key={e.name}> {e.name} </li>)}
      </ul>
    </div>
  )
}
export default App;