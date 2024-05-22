import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = (props) => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "040-1234567" },
	]);

	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchInput, setSearchInput] = useState("");

	function getData() {
		axios.get("http://localhost:3001/persons").then((response) => {
			const persons = response.data;
			setPersons(persons);
		});
	}

	useEffect(getData, []);

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
			<Filter filter={searchItems} />
			{/* filter shwn with <input onChange={searchItems} /> */}
			<hr />
			<h3>Add a new</h3>
			<PersonForm
				onSumbit={addPerson}
				nameValue={newName}
				nameHandleChange={handleNewName}
				numberValue={newNumber}
				numberHandleChange={handleNewNumber}
			/>
			<h2>Numbers</h2>
			<Persons search={searchFilter} />
		</div>
	);
};

export default App;
