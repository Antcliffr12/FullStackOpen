const Country = (props) => {
	return (
		<li>
			{props.name}
			{props.showDetails && (
				<div>
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
			)}
			{props.button && <button onClick={props.toggleViewCountry}>Show</button>}
		</li>
	);
};

export default Country;
