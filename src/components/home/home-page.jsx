import React, { useState } from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import ContactForm from "../contact/contact-form";
import HotelsCard from "../hotels/hotels-card";
import HomeJumbotron from "./home-jumbotron";

function HomePage() {
	const [searchText, setSearchText] = useState("");

	return (
		<>
			<HomeJumbotron setText={setSearchText} />
			<div className="container py-5">
				<Heading header={"Featured hotels"} />
				<SubHeading header={"Book your next holidays in Bergen"} />
				<HotelsCard showFeatured={true} />
			</div>
			<div className="contact__container py-5">
				<ContactForm />
			</div>
		</>
	);
}

export default HomePage;
