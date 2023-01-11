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
			<div className="container">
				<Heading header={hotel.title} />
				<SubHeading header={hotel.description} />
				{hotel && <img src={hotel.image[0]?.url} class="card-img-top" alt={hotel.title} />}

				<div class="card mb-3">
					{/* <img src={hotel.image[0]?.url} class="card-img-top" alt={hotel.title} /> */}
					<div class="card-body">
						<h5 class="card-title">{hotel.title}</h5>
						<p class="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p class="card-text">
							<small class="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailsPage;
