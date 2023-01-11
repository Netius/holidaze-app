import React from "react";

function HotelRating({ rating }) {
	return (
		<div className="mb-2">
			{Array.from(Array(rating), (e, i) => {
				return <i key={i} className="fa fa-star text-warning"></i>;
			})}
		</div>
	);
}

export default HotelRating;
