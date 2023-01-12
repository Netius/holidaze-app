import React, { useState } from "react";
import HomeJumbotron from "./home-jumbotron";

function HomePage() {
	const [searchText, setSearchText] = useState("");

	return (
		<>
			<HomeJumbotron setText={setSearchText} />
			{searchText}
		</>
	);
}

export default HomePage;
