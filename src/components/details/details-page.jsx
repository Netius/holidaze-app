import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_URL, POPULATE_ALL, BASE_URL } from "../../constants/api";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import HotelsMessages from "./hotels-messages";
import { calculateRating } from "../../utils/help-functions";
import FormError from "../../common/form-error";
import HotelRating from "../../common/hotel-rating";
import PageTitle from "../../common/pageTitle";
import GrowingSpinnerLoader from "../../common/growing-spinner-loader";
import NoHotelImage from "../../images/no-hotel-image.jpg";

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
			.get(HOTELS_URL + id + POPULATE_ALL)
			.then((response) => {
				setHotel(response.data.data);
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
								style={{ backgroundImage: `url(${hotel.attributes.image.data ? BASE_URL + hotel.attributes.image?.data[0].attributes.url : NoHotelImage})`}}
								alt={hotel.attributes.title}
							></div>
							<PageTitle header={"Details"} />
							<Heading header={hotel.attributes.title} />
							<HotelRating rating={calculateRating(hotel)} />
							<SubHeading header={hotel.attributes.description} />
						</div>

						<div class="row g-0 align-items-center mt-5">
							<div class="col">
								<button className="btn btn-lg btn-primary" onClick={showAlert}>
									Book now
								</button>
							</div>
							<div class="col text-end">
								<p className="mb-0 badge hotel-card__price">$ {hotel.attributes.price},-</p>
							</div>
						</div>
					
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
