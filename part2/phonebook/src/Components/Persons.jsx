const Persons = (props) => {
	const persons = props.search.map((person, i) => {
		return (
			<li key={i}>
				{person.name} {person.number}
			</li>
		);
	});

	return <>{persons}</>;
};

export default Persons;
