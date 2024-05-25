import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
	const [searchCountries, setSearchCountries] = useState("");
	const [countries, setCountries] = useState(null);
	const [country, setCountry] = useState({});

	useEffect(() => {
		console.log("effect run, country is now", countries);

		if (countries) {
			axios
				.get(
					`https://studies.cs.helsinki.fi/restcountries/api/name/${countries}`
				)
				.then((response) => {
					console.log(response.data);
					setCountry(response.data);
				})
				.catch((error) => {
					console.log("Could not fetch countries", error);
				});
		}
	}, [countries]);

	const handleChange = (event) => {
		setSearchCountries(event.target.value);
	};

	const onSearch = (event) => {
		event.preventDefault();
		setCountries(searchCountries);
	};

	let name = "";
	let flag = "";
	let languages = [];
	if (country) {
		name = country.name?.common;
		flag = country.flag;
	}
	return (
		<div>
			<form onSubmit={onSearch}>
				<input type="text" value={searchCountries} onChange={handleChange} />
				<button type="submit">Country</button>
			</form>
			<h1>{name}</h1>
			<h2>{flag}</h2>
			{country.language?.map((language, i) => {
				return <li key={i}>{language}</li>;
			})}
		</div>
	);
};

export default App;
