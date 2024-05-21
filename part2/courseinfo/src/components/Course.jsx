import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({ course }) => {
	return (
		<>
			<Header heading={course} />
			<Content content={course} />
			<Total total={course} />
		</>
	);
};

export default Course;
