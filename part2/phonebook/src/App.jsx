import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber ] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const nameExists = persons.filter(person => person.name === newName).length > 0;

    if( nameExists ) {
      alert(`${newName} is already in the list!`);
      return;
    }
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNumberChnage = (event) => {
    setNewNumber(event.target.value)
  }

  return (
   <div>
      <h2>PhoneBook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}  
          />
        </div>
        <div>number: 
          <input 
            value={newNumber}
            onChange={handleNumberChnage}  
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person, i) => {
          console.log(person)
          return <li key={i}>{person.name} {person.number}</li>
        })
      }
   </div>
  )
}

export default App
