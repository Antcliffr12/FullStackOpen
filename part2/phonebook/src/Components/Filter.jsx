import React from "react";

const Filter = (props) => {
	return (
		<div>
			filter shwn with <input onChange={props.filter} />
		</div>
	);
};

export default Filter;
