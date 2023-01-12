import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_URL } from "../../constants/api";
import FormError from "../../common/form-error";
import { Link } from "react-router-dom";
import HotelRating from "../../common/hotel-rating";
import { calculateRating } from "../../utils/help-functions";

function HotelsCard() {
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
		<>
			{hotels &&
				hotels.map((hotel, index) => {
					return (
						<div className="card my-4 hotel-card" key={index}>
							<div className="row g-0">
								<div className="col-md-4 position-relative">
									<img src={hotel.image[0]?.url} className="img-fluid rounded-start" alt={hotel.title} />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<span className="badge float-end hotel-card__price">$ {hotel.price},-</span>
										<h5 className="card-title">{hotel.title}</h5>
										<HotelRating rating={calculateRating(hotel)} />
										<p className="card-text">{hotel.description}</p>
										<Link to={`/details/${hotel.id}`} className="btn hotel-card__read mt-5">
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			{error && <FormError>{error}</FormError>}
		</>
	);
}

export default HotelsCard;
