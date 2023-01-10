import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_URL } from "../../constants/api";
import FormError from "../../common/form-error";

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
						<>
							<div className="card my-4 hotel-card" key={index}>
								<div className="row g-0">
									<div className="col-md-4 position-relative">
										<img src={hotel.image[0]?.url} className="img-fluid rounded-start" alt="..." />
										<span className="badge position-absolute hotel-card__price">${hotel.price},-</span>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{hotel.title}</h5>
											<p className="card-text">{hotel.description}</p>
										</div>
									</div>
								</div>
							</div>
						</>
					);
				})}
			{error && <FormError>{error}</FormError>}
		</>
	);
}

export default HotelsCard;
