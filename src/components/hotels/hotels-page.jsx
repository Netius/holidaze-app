import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import PageTitle from "../../common/pageTitle";
import SubHeading from "../../common/subheading";
import HotelsCard from "./hotels-card";
import { HOTELS_URL, POPULATE_ALL } from "../../constants/api";
import axios from "axios";
import FormError from "../../common/form-error";
import GrowingSpinnerLoader from "../../common/growing-spinner-loader";

function HotelsPage() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const getHotels = async () => {
		setLoading(true);
		axios
			.get(HOTELS_URL + POPULATE_ALL)
			.then((response) => {
				setHotels(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
				setLoading(false);
			});
	};

	useEffect(() => {
		getHotels();
	}, []);
	return (
		<div className="container">
			<PageTitle header={"Hotels"} />
			<Heading header={"Hotels"} />
			<SubHeading header={"Check out our hotels around Bergen"} />
			<HotelsCard hotels={hotels} />
			{error && <FormError>{error}</FormError>}
			{loading && <GrowingSpinnerLoader />}
		</div>
	);
}

export default HotelsPage;
