import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_URL } from "../../constants/api";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import HotelsMessages from "./hotels-messages";
import { calculateRating } from "../../utils/help-functions";
import FormError from "../../common/form-error";
import HotelRating from "../../common/hotel-rating";
import PageTitle from "../../common/pageTitle";
import GrowingSpinnerLoader from "../../common/growing-spinner-loader";

function DetailsPage() {
	const [error, setError] = useState(null);
	const [hotel, setHotel] = useState("");
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	if (!id) navigate("/login");

	const showAlert = () => {
		alert("Coming soon!");
	};

	const getHotel = async () => {
		setLoading(true);
		await axios
			.get(HOTELS_URL + id)
			.then((response) => {
				setHotel(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
				setLoading(false);
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
						<div className="position-relative">
							<div
								className="hero__image mt-5"
								style={{ backgroundImage: `url(${hotel.image[0]?.url})` }}
								alt={hotel.title}
							></div>
							<PageTitle header={"Details"} />
							<Heading header={hotel.title} />
							<HotelRating rating={calculateRating(hotel)} />
							<span className="badge position-absolute hotel-card__price">$ {hotel.price},-</span>
							<SubHeading header={hotel.description} />
						</div>
						<button className="btn btn-lg btn-primary mt-4" onClick={showAlert}>
							Book now
						</button>
					</div>
					<div className="container__background">
						<HotelsMessages hotel={hotel} getHotel={getHotel} />
					</div>
				</>
			)}
			{error && <FormError>{error}</FormError>}
			{loading && <GrowingSpinnerLoader />}
		</>
	);
}

export default DetailsPage;
