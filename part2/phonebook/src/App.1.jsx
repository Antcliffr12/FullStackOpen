import { useState } from "react";
import Filter from "./Components/Filter";

const App = (props) => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "040-1234567" },
	]);

	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchInput, setSearchInput] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			phone: newNumber,
			id: newName.length + 1,
		};

		const nameExists =
			persons.filter((person) => person.name === newName).length > 0;

		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		setPersons(persons.concat(personObject));
		setNewName("");
		setNewNumber("");
	};
	const handleNewName = (event) => {
		setNewName(event.target.value);
	};

	const handleNewNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const searchItems = (event) => {
		console.log(event.target.value);
		setSearchInput(event.target.value);
	};

	const searchFilter = persons.filter((person) =>
		person.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter />
			filter shwn with <input onChange={searchItems} />
			<hr />
			<h3>Add a new</h3>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNewName} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNewNumber} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{searchFilter.map((person, i) => {
				return (
					<li key={i}>
						{person.name} {person.phone}
					</li>
				);
			})}
		</div>
	);
};
export default App;
