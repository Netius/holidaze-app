import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_URL } from "../../constants/api";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";

function DetailsPage() {
	const [error, setError] = useState(null);
	const [hotel, setHotel] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	if (!id) navigate("/login");

	const getHotel = async () => {
		await axios
			.get(HOTELS_URL + id)
			.then((response) => {
				console.log(response.data);
				setHotel(response.data);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
			});
	};

	useEffect(() => {
		getHotel();
	}, []);

	return (
		<>
			{hotel && (
				<>
					<div className="container hero">
						<div
							className="hero__image"
							style={{ backgroundImage: `url(${hotel.image[0]?.url})` }}
							alt={hotel.title}
						></div>
						<Heading header={hotel.title} />
						<SubHeading header={hotel.description} />
					</div>
				</>
			)}
		</>
	);
}

export default DetailsPage;
