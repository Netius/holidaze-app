import React, { useEffect } from "react";

function Heading({ header }) {
	useEffect(() => {
		document.title = `${header} | js-ca-netius `;
	}, [header]);

	return <h1 className="fs-2 my-4">{header}</h1>;
}

export default Heading;
