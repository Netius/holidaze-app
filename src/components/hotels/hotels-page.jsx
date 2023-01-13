import React from "react";
import Heading from "../../common/Heading";
import PageTitle from "../../common/pageTitle";
import SubHeading from "../../common/subheading";
import HotelsCard from "./hotels-card";

function HotelsPage() {
	return (
		<div className="container">
			<PageTitle header={"Hotels"} />
			<Heading header={"Hotels"} />
			<SubHeading header={"Check out our hotels around Bergen"} />
			<HotelsCard />
		</div>
	);
}

export default HotelsPage;
