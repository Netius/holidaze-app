import axios from "axios";
import React, { useState } from "react";
import SpinnerLoading from "../../common/spinner-loading";
import { HOTELS_MESSAGES } from "../../constants/api";
import useLocalStorage from "../../hooks/useLocalStorage";
import FormError from "../../common/form-error";

function ModalMessage({ hotel, getHotel }) {
	const [author, setAuthor] = useState();
	const [rating, setRating] = useState();
	const [message, setMessage] = useState();

	const [auth, setAuth] = useLocalStorage("auth", null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [saved, setSaved] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setSaved(null);

		const data = {
			Author: author,
			Message: message,
			rating: rating,
			hotel: hotel.id,
		};

		try {
			setSubmitting(true);
			const response = await axios.post(`${HOTELS_MESSAGES}`, data, {
				headers: {
					Authorization: `Bearer ${auth.jwt}`,
				},
			});

			if (response.statusText === "OK") {
				setSaved(true);
			}
		} catch (error) {
			console.log(error);
			setError(error.message.toString());
		} finally {
			setSubmitting(false);
			getHotel();
		}
	}

	return (
		<div className="modal" id="messageModal" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="modal-header">
							<h5 className="fs-5 modal-title">Add a review</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<label htmlFor="hotel-author" className="form-label">
								Author
							</label>
							<input
								id="hotel-author"
								name="hotel-author"
								type="text"
								className="form-control"
								onChange={(e) => setAuthor(e.target.value)}
								required
								disabled={submitting}
							/>

							<div className="my-3 d-flex justify-content-between">
								<div>
									<label htmlFor="hotel-rating" className="form-label">
										Rating (1 - 5)
									</label>
									<input
										id="hotel-rating"
										name="hotel-rating"
										type="number"
										min={1}
										max={5}
										className="form-control"
										onChange={(e) => setRating(e.target.value)}
										required
										disabled={submitting}
									/>
								</div>
							</div>

							<label htmlFor="hotel-message" className="form-label d-block mt-3">
								Message
							</label>
							<textarea
								id="hotel-message"
								name="hotel-message"
								className="form-control"
								rows={6}
								cols={50}
								minLength={20}
								onChange={(e) => setMessage(e.target.value)}
								required
								disabled={submitting}
							/>
						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="submit" className="btn btn-success">
								{submitting ? "Saving..." : "Save changes"} {submitting && <SpinnerLoading />}
							</button>
						</div>
						{saved && <div className=" alert alert-success m-3">Saved</div>}
						{error && <FormError>{error}</FormError>}
					</form>
				</div>
			</div>
		</div>
	);
}

export default ModalMessage;
