import axios from "axios";
import React, { useEffect, useState } from "react";
import SpinnerLoading from "../../common/spinner-loading";
import { HOTELS_URL } from "../../constants/api";
import useLocalStorage from "../../hooks/useLocalStorage";
import FormError from "../../common/form-error";
import addImageHotel from "../../utils/help-functions";

function ModalHotels({ hotelsState }) {
	const [title, setTitle] = useState();
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();
	const [featured, setFeatured] = useState();
	const [image, setImage] = useState();

	const [auth, setAuth] = useLocalStorage("auth", null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [saved, setSaved] = useState(null);

	useEffect(() => {
		setTitle(hotelsState.title);
		setPrice(hotelsState.price);
		setDescription(hotelsState.description);
		setFeatured(hotelsState.featured);
		setError(null);
		setSaved(null);
	}, [hotelsState]);

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setSaved(null);

		const data = {
			title: title,
			price: price,
			description: description,
			featured: featured,
		};

		try {
			setSubmitting(true);
			const response = await axios.put(`${HOTELS_URL}${hotelsState.id}`, data, {
				headers: {
					Authorization: `Bearer ${auth.jwt}`,
				},
			});
			if (response.statusText === "OK") {
				await addImageHotel(image, hotelsState.id, auth.jwt);
				setSaved(true);
			}
		} catch (error) {
			console.log(error);
			setError(error.message.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="modal" id="exampleModal" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="modal-header">
							<h5 className="fs-5 modal-title">Edit hotel</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<label htmlFor="hotel-title" className="form-label">
								Title
							</label>
							<input
								id="hotel-title"
								name="hotel-title"
								type="text"
								className="form-control"
								value={title || ""}
								onChange={(e) => setTitle(e.target.value)}
								required
								disabled={submitting}
							/>

							<div className="my-3 d-flex justify-content-between">
								<div>
									<label htmlFor="hotel-price" className="form-label">
										Price
									</label>
									<input
										id="hotel-price"
										name="hotel-price"
										type="number"
										min={10}
										className="form-control"
										value={price || ""}
										onChange={(e) => setPrice(e.target.value)}
										required
										disabled={submitting}
									/>
								</div>
								<div>
									<label htmlFor="hotel-featured" className="form-check-label">
										Featured
									</label>
									<input
										id="hotel-featured"
										name="hotel-featured"
										type="checkbox"
										className="form-check-input ms-2"
										value={featured || ""}
										checked={featured || ""}
										onChange={(e) => setFeatured(e.target.checked)}
										disabled={submitting}
									/>
								</div>
							</div>
							<label class="form-label" htmlFor="input-image">
								Image
							</label>
							<input
								type="file"
								name="files"
								className="form-control d-block"
								id="input-image"
								onChange={(e) => setImage(e.target)}
							/>

							<label htmlFor="hotel-description" className="form-label d-block mt-3">
								Description
							</label>
							<textarea
								id="hotel-description"
								name="hotel-description"
								className="form-control"
								rows={6}
								cols={50}
								minLength={20}
								value={description || ""}
								onChange={(e) => setDescription(e.target.value)}
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

export default ModalHotels;
