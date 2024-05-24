import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Components/Country";

function App() {
	const [countries, setCountries] = useState(null);
	const [searchCountries, setSearchCountries] = useState("");
	const [country, setCountry] = useState(null);

	const getAllCountries = () => {
		axios
			.get("https://studies.cs.helsinki.fi/restcountries/api/all")
			.then((response) => {
				setCountries(response.data);
			});
	};

	const getCountryByName = () => {
		axios
			.get("https://studies.cs.helsinki.fi/restcountries/api/name/sweden")
			.then((response) => {
				console.log(response.data, "data");
			});
	};

	useEffect(() => {
		getAllCountries();
	}, []);

	if (!countries) {
		return null;
	}

	const searchInput = (event) => {
		setSearchCountries(event.target.value);
	};
	const searchFilter = countries.filter((country) => {
		return country.name.common
			.toLowerCase()
			.includes(searchCountries.toLowerCase());
	});

	return (
		<div>
			find countries: <input onChange={searchInput} />
			{searchFilter.length === 1 ? (
				<p>Matching 1 Country</p>
			) : searchFilter.length >= 10 ? (
				<p>Too many matches, specify another filter</p>
			) : searchFilter.length >= 1 ? (
				searchFilter.map((country) => {
					return <Country key={country.cca2} name={country.name.common} />;
				})
			) : (
				<p>No matches found</p>
			)}
		</div>
	);
}

export default App;
