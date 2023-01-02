import React, { useEffect } from "react";

function Heading({ header }) {
	useEffect(() => {
		document.title = `${header} | Holidaze `;
	}, [header]);

	return <h1 className="fs-2 my-5">{header}</h1>;
}

export default Heading;
