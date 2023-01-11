import React from "react";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";

function HotelsMessages({ hotel }) {
	console.log(hotel.hotels_messages.length);
	return (
		<>
			<div className="my-5 py-3">
				<Heading header={"Reviews"} />

				<SubHeading header={"What our customers are saying."} />
				{hotel.hotels_messages.length == 0 ? (
					<p className="fs-4 my-4">Be the first to leave a review!</p>
				) : (
					<ul className="list-group my-4">
						{hotel.hotels_messages.map((h, index) => {
							return (
								<React.Fragment key={index}>
									<li className="list-group-item">
										<span className="fs-4">"{h.Message}"</span>
										<p className="text-muted">
											{h.Author} - {h.published_at}
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
