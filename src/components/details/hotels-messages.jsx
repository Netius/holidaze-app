import React from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import Moment from "moment";
import HotelRating from "../../common/hotel-rating";
import ModalMessage from "../modal/modal-message";

function HotelsMessages({ hotel, getHotel }) {
	return (
		<>
			<div className="container mt-5 py-5">
				<div>
					<button
						className="btn btn-dark float-end"
						data-bs-toggle="modal"
						data-bs-target="#messageModal"
						aria-expanded="false"
						aria-controls="messageHotel"
						title="Add a review"
					>
						<i className="fa fa-plus me-2"></i>
						Add a review
					</button>
					<Heading header={"Reviews"} />
					<SubHeading header={"What our customers are saying."} />
				</div>
				<div className="mt-5">
					{hotel.hotels_messages.length === 0 ? (
						<ul className="list-group my-4">
							<li className="list-group-item py-3">Be the first to leave a review!</li>
						</ul>
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
												<small>{Moment(h.published_at).format("DD MMM YYYY")}</small>
											</p>
										</li>
									</React.Fragment>
								);
							})}
						</ul>
					)}
				</div>
			</div>
			<ModalMessage hotel={hotel} getHotel={getHotel} />
		</>
	);
}

export default HotelsMessages;
