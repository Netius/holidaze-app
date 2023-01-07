import React, { useEffect } from "react";

function Heading({ header }) {
	useEffect(() => {
		document.title = `${header} | Holidaze `;
	}, [header]);

	return <h1 className="fs-2 mt-4">{header}</h1>;
}

export default Heading;
