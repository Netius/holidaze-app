import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import PageTitle from "../../common/pageTitle";
import SubHeading from "../../common/subheading";
import ContactForm from "../contact/contact-form";
import HotelsCard from "../hotels/hotels-card";
import HomeJumbotron from "./home-jumbotron";
import { HOTELS_URL } from "../../constants/api";
import axios from "axios";
import FormError from "../../common/form-error";
import GrowingSpinnerLoader from "../../common/growing-spinner-loader";

function HomePage() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const getHotels = async () => {
		setLoading(true);

		await axios
			.get(HOTELS_URL)
			.then((response) => {
				setHotels(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
				console.error(error);
			});
	};

	useEffect(() => {
		getHotels();
	}, []);

	return (
		<>
			<PageTitle header={"Home"} />
			<HomeJumbotron hotels={hotels} />
			<div className="container py-5">
				<Heading header={"Featured hotels"} />
				<SubHeading header={"Book your next holidays in Bergen"} />
				<HotelsCard hotels={hotels.filter((r) => r.featured === true)} />
				{error && <FormError>{error}</FormError>}
				{loading && <GrowingSpinnerLoader />}
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
