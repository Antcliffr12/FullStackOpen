import { useState, useEffect } from "react";
import axios from "axios";

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
			<input
				type="text"
				placeholder="Search countries"
				onChange={handleCountrySearch}
			/>
			{filterCountries.length === 1 ? (
				<ul>
					{filterCountries.map((country) => {
						return (
							<div key={country.cca2}>
								<h1>{country.name.common}</h1>
								<p>Capital: {country.capital}</p>
								<p>Area: {country.area}</p>
								<p>Languages:</p>
								<ul>
									{Object.entries(country.languages).map(([key, value]) => (
										<li key={key}>{value}</li>
									))}
								</ul>
								<p>
									<img src={country.flags.svg} alt="country flag" width={300} />
								</p>
							</div>
						);
					})}
				</ul>
			) : filterCountries.length < 10 ? (
				<ul>
					{filterCountries.map((country) => (
						<li key={country.cca2}>{country.name.common}</li>
					))}
				</ul>
			) : (
				<p>Over 10 countries</p>
			)}
		</div>
	);
};

export default App;
