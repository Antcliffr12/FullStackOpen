import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Components/Filter";
import Country from "./Components/Country";

const App = () => {
	const [countries, setCountries] = useState(null);
	const [searchCountries, setSearchCountries] = useState("");
	const [countryData, setCountryData] = useState(null);

	useEffect(() => {
		axios
			.get("https://studies.cs.helsinki.fi/restcountries/api/all")
			.then((response) => {
				console.log(response.data);
				setCountries(response.data);
			});
	}, []);

	useEffect(() => {
		if (searchCountries.length === 1) {
			axios
				.get(
					`https://studies.cs.helsinki.fi/restcountries/api/name/${searchCountries}`
				)
				.then((response) => {
					console.log(response.data, "countryData");
					setCountryData(response.data);
				});
		}
	}, [searchCountries]);

	if (!countries) {
		return null;
	}

	const handleCountrySearch = (e) => {
		setSearchCountries(e.target.value);
	};

	const filterCountries = countries.filter((country) => {
		return country.name.common
			.toLowerCase()
			.includes(searchCountries.toLocaleLowerCase());
	});

	return (
		<div>
			<Filter filter={handleCountrySearch} />
			{filterCountries.length === 1 ? (
				<ul>
					{filterCountries.map((country) => {
						return (
							<Country
								key={country.cca2}
								name={country.name.common}
								capital={country.capital}
								area={country.area}
								languages={country.languages}
								flag={country.flags.svg}
								showDetails={true}
							/>
						);
					})}
				</ul>
			) : filterCountries.length < 10 ? (
				<ul>
					{filterCountries.map((country) => (
						<Country
							key={country.cca2}
							name={country.name.common}
							showDetails={false}
						/>
					))}
				</ul>
			) : (
				<p>Over 10 countries</p>
			)}
		</div>
	);
};

export default App;
