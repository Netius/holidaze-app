import React,{ useContext } from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import Moment from "moment";
import HotelRating from "../../common/hotel-rating";
import ModalMessage from "../modal/modal-message";
import AuthContext from "../../context/AuthContext";

function HotelsMessages({ hotel, getHotel }) {
	const [auth, setAuth] = useContext(AuthContext);
	console.log(auth)
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
						disabled={!auth}
					>
						<i className="fa fa-plus me-2"></i>
						{auth ? 'Add a review' : 'Log in to add a review'}
					</button>
					<Heading header={"Reviews"} />
					<SubHeading header={"What our customers are saying."} />
				</div>
				<div className="mt-2">
					{hotel.attributes.hotels_messages.data.length === 0 ? (
						<ul className="list-group my-4">
							<li className="list-group-item py-3">Be the first to leave a review!</li>
						</ul>
					) : (
						<ul className="list-group my-4">
							{hotel.attributes.hotels_messages.data.map((h, index) => {
								return (
									<React.Fragment key={index}>
										<li className="list-group-item py-3 mt-3">
											<HotelRating rating={h.attributes.rating} />
											<p className="fs-5">{h.attributes.Message}</p>
											<p className="text-muted">
												{h.attributes.Author}
												<br></br>
												<small>{Moment(h.attributes.publishedAt).format("DD MMM YYYY")}</small>
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
