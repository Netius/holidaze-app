import React, { useEffect } from "react";

function PageTitle({ header }) {
	useEffect(() => {
		document.title = `${header} | Holidaze `;
	}, [header]);
	return <></>;
}

export default PageTitle;
