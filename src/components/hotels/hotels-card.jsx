import React from "react";
import { Link } from "react-router-dom";
import HotelRating from "../../common/hotel-rating";
import { calculateRating } from "../../utils/help-functions";

function HotelsCard({ showFeatured, hotels }) {
	return (
		<>
			{hotels &&
				hotels.map((hotel, index) => {
					return (
						<div className="card my-4 hotel-card" key={index}>
							<div className="row g-0">
								<div className="col-md-4 position-relative">
									<img src={hotel.attributes.image_url} className="img-fluid rounded-start" alt={hotel.attributes.title} />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<span className="badge float-end hotel-card__price">$ {hotel.attributes.price},-</span>
										<h5 className="card-title">{hotel.attributes.title}</h5>
										<HotelRating rating={calculateRating(hotel)} />
										<p className="card-text">{hotel.attributes.description}</p>
										<Link to={`/details/${hotel.id}`} className="btn hotel-card__read mt-5">
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
}

export default HotelsCard;
