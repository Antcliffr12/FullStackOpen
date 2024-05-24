import { useState, useEffect } from "react";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import Notification from "./Components/Notification";
import personServices from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [successMessage, setSuccessMessage] = useState(null);

	const getData = () => {
		personServices.getAll().then((initPersons) => {
			setPersons(initPersons);
		});
	};

	useEffect(getData, []);

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};

		const nameExists =
			persons.filter((person) => person.name === newName).length > 0;

		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		personServices.create(personObject).then((returnedPerson) => {
			setSuccessMessage("Success");
			setPersons(persons.concat(returnedPerson));
			setNewName("");
			setNewNumber("");

			setTimeout(() => {
				setSuccessMessage(null);
			}, 5000);
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

	const deletePersons = (id) => {
		const person = persons.find((person) => person.id === id);
		const changedPerson = {
			...person,
			id: person.id,
		};
		console.log(changedPerson);
		personServices
			.remove(id, changedPerson)
			.then((returnedPerson) => {
				setPersons(
					person.map((person) => (person.id !== id ? person : returnedPerson))
				);
			})
			.catch((error) => {
				alert(`Person ${person.name} is being deleted from server`);
				setPersons(persons.filter((person) => person.id !== id));
			});
	};
	console.log(successMessage);
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={searchItems} />
			<Notification message={successMessage} />
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
			{searchFilter.map((person) => (
				<Persons
					key={person.id}
					name={person.name}
					number={person.number}
					deletePerson={() => deletePersons(person.id)}
				/>
			))}
		</div>
	);
};

export default App;
