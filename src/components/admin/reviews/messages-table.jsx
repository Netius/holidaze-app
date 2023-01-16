import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOTELS_MESSAGES } from "../../../constants/api";
import Heading from "../../../common/Heading";
import SubHeading from "../../../common/subheading";
import { Link } from "react-router-dom";
import FormError from "../../../common/form-error";
import ModalDeleteMessage from "../../modal/modal-delete-mesage";
import GrowingSpinnerLoader from "../../../common/growing-spinner-loader";

function MessagesTable() {
	const [messages, setMessages] = useState([]);
	const [error, setError] = useState(null);
	const [messageDelete, setMessageDelete] = useState([]);
	const [loading, setLoading] = useState(false);

	const getMessages = async () => {
		setLoading(true);
		await axios
			.get(HOTELS_MESSAGES)
			.then((response) => {
				setMessages(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
				setLoading(false);
			});
	};

	useEffect(() => {
		getMessages();
	}, []);

	return (
		<>
			<div className="my-5 py-4">
				<Heading header={"Reviews"} />
				<SubHeading header={"View or remove reviews on the website"} />
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Hotel</th>
							<th scope="col">Author</th>
							<th scope="col">Message</th>
							<th scope="col">Rating</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{messages &&
							messages.map((message, index) => {
								return (
									<React.Fragment key={index}>
										<tr className="align-middle">
											<td>
												<Link to={`/details/${message.hotel.id}`} className="link-primary">
													{message.hotel.title}
												</Link>
											</td>
											<td>{message.Author}</td>
											<td>{message.Message}</td>
											<td>{message.rating}</td>
											<td>
												<button
													type="button"
													className="btn btn-sm btn-danger ms-2"
													data-bs-toggle="modal"
													data-bs-target="#deleteMessageModal"
													aria-expanded="false"
													aria-controls="deleteMessageModal"
													title="Delete message"
													onClick={() => setMessageDelete(message)}
												>
													<i className="fa fa-trash"></i>
												</button>
											</td>
										</tr>
									</React.Fragment>
								);
							})}
					</tbody>
				</table>
				{error && <FormError>{error}</FormError>}
				{loading && <GrowingSpinnerLoader />}
			</div>
			<ModalDeleteMessage message={messageDelete} getMessages={getMessages} />
		</>
	);
}

export default MessagesTable;
