const Part = ({ parts }) => {
	return (
		<li>
			{parts.name} {parts.exercises}
		</li>
	);
};

export default Part;
