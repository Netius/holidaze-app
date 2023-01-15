import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import PageTitle from "../../common/pageTitle";
import SubHeading from "../../common/subheading";
import HotelsCard from "./hotels-card";
import { HOTELS_URL } from "../../constants/api";
import axios from "axios";
import FormError from "../../common/form-error";

function HotelsPage() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	const getHotels = async () => {
		axios
			.get(HOTELS_URL)
			.then((response) => {
				setHotels(response.data);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
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
		</div>
	);
}

export default HotelsPage;
