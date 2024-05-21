import Part from "./Part";

const Content = ({ content }) => {
	return (
		<ul>
			{content.parts.map((part) => {
				return <Part key={part.id} parts={part} />;
			})}
		</ul>
	);
};

export default Content;
