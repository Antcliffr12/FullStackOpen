const Filter = (props) => {
	return (
		<div>
			find countries:
			<input
				type="text"
				placeholder="Search countries"
				onChange={props.filter}
			/>
		</div>
	);
};

export default Filter;
