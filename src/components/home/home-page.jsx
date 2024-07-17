import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import PageTitle from "../../common/pageTitle";
import SubHeading from "../../common/subheading";
import ContactForm from "../contact/contact-form";
import HotelsCard from "../hotels/hotels-card";
import HomeJumbotron from "./home-jumbotron";
import { HOTELS_URL, POPULATE_ALL } from "../../constants/api";
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
			.get(HOTELS_URL + POPULATE_ALL)
			.then((response) => {
				setHotels(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
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
			{hotels && 
				<HomeJumbotron hotels={hotels} />
			}
			<div className="container py-5">
				<Heading header={"Featured hotels"} />
				<SubHeading header={"Book your next holidays in Bergen"} />
				{hotels && 
					<HotelsCard hotels={hotels.filter((r) => r.attributes.featured === true)} />
				}
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
