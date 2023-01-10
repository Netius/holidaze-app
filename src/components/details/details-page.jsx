import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_URL } from "../../constants/api";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";

function DetailsPage() {
	const [error, setError] = useState(null);
	const [hotel, setHotel] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		console.log("ADSDAS", id);
		if (!id) navigate("/login");

		const getHotel = async () => {
			axios
				.get(HOTELS_URL + id)
				.then((response) => {
					console.log(response);
					setHotel(response.data);
				})
				.catch((error) => {
					setError(error);
					console.error(error);
				});
		};
		getHotel();
	}, []);
	return (
		<>
			<div className="container">
				<Heading header={hotel.title} />
				<SubHeading header={hotel.description} />
			</div>
		</>
	);
}

export default DetailsPage;
