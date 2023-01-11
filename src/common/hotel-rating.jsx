import React from "react";

function HotelRating({ rating }) {
	const roundedRating = Math.round(rating);
	return (
		<div className="mb-2">
			{Array.from(Array(roundedRating), (e, i) => {
				return <i key={i} className="fa fa-star text-warning"></i>;
			})}
		</div>
	);
}

export default HotelRating;
