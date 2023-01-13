import React from "react";
import Heading from "../../common/Heading";
import PageTitle from "../../common/pageTitle";
import SubHeading from "../../common/subheading";
import ContactForm from "../contact/contact-form";
import HotelsCard from "../hotels/hotels-card";
import HomeJumbotron from "./home-jumbotron";

function HomePage() {
	return (
		<>
			<PageTitle header={"Home"} />
			<HomeJumbotron />
			<div className="container py-5">
				<Heading header={"Featured hotels"} />
				<SubHeading header={"Book your next holidays in Bergen"} />
				<HotelsCard showFeatured={true} />
			</div>
			<div className="contact__container py-5">
				<div className="container">
					<ContactForm />
				</div>
			</div>
		</>
	);
}

export default HomePage;
