import React, { useState } from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import HotelsCard from "../hotels/hotels-card";
import HomeJumbotron from "./home-jumbotron";

function HomePage() {
	const [searchText, setSearchText] = useState("");

	return (
		<>
			<HomeJumbotron setText={setSearchText} />
			<div className="container py-5">
				<Heading header={"Hotels"} />
				<SubHeading header={"Book your next destination"} />
				<HotelsCard />
			</div>
		</>
	);
}

export default HomePage;
