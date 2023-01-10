import React from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import HotelsCard from "./hotels-card";

function HotelsPage() {
	return (
		<div className="container">
			<Heading header={"Hotels"} />
			<SubHeading header={"Check out our premium hotels."} />
			<HotelsCard />
		</div>
	);
}

export default HotelsPage;
