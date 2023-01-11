import React from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import Moment from "moment";
import HotelRating from "../../common/hotel-rating";

function HotelsMessages({ hotel }) {
	console.log(hotel.hotels_messages.length);
	return (
		<>
			<div className="my-5 py-3">
				<Heading header={"Reviews"} />

				<SubHeading header={"What our customers are saying."} />
				{hotel.hotels_messages.length == 0 ? (
					<p className="fs-4 py-4">Be the first to leave a review!</p>
				) : (
					<ul className="list-group my-4">
						{hotel.hotels_messages.map((h, index) => {
							return (
								<React.Fragment key={index}>
									<li className="list-group-item py-3">
										<HotelRating rating={h.rating} />
										<p className="fs-5">{h.Message}</p>
										<p className="text-muted">
											{h.Author}
											<br></br>
											{Moment(h.published_at).format("DD MMM YYYY")}
										</p>
									</li>
								</React.Fragment>
							);
						})}
					</ul>
				)}
			</div>
		</>
	);
}

export default HotelsMessages;
