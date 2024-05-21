const Total = ({ total }) => {
	const sum = total.parts.reduce((prevValue, currentValue) => {
		return prevValue + currentValue.exercises;
	}, 0);
	return <strong>Total of {sum} exercises</strong>;
};

export default Total;
