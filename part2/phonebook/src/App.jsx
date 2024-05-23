import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchInput, setSearchInput] = useState("");

	const getData = () => {
		axios
			.get("http://localhost:3002/persons")
			.then((response) => {
				console.log("Fetched data:", response.data);
				setPersons(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	};

	useEffect(getData, []);

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
			id: newName.length + 1,
		};

		const nameExists =
			persons.filter((person) => person.name === newName).length > 0;

		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		axios
			.post("http://localhost:3002/persons", personObject)
			.then((response) => {
				setPersons(persons.concat(response.data));
				setNewName("");
				setNewNumber("");
			});
	};
	const handleNewName = (event) => {
		setNewName(event.target.value);
	};

	const handleNewNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const searchItems = (event) => {
		setSearchInput(event.target.value);
	};

	const searchFilter = persons.filter((person) => {
		return person.name.toLowerCase().includes(searchInput.toLowerCase());
	});
	console.log(persons);
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={searchItems} />
			{/* filter shwn with <input onChange={searchItems} /> */}
			<hr />
			<h3>Add a new</h3>
			<PersonForm
				onSubmit={addPerson}
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
