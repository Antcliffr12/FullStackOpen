const CountryDetails = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>Capital: {props.capital}</p>
			<p>Area: {props.area}</p>
			<p>Languages:</p>
			<ul>
				{Object.entries(props.languages).map(([key, value]) => (
					<li key={key}>{value}</li>
				))}
			</ul>
			<p>
				<img src={props.flag} alt="country flag" width={300} />
			</p>
		</div>
	);
};

export default CountryDetails;
