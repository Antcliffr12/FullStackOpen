const Persons = (props) => {
	return (
		<>
			<li>
				{props.name} {props.number}
				<button onClick={props.deletePerson}>delete</button>
			</li>
		</>
	);
};

export default Persons;
