import React, { useEffect, useState } from "react";
import Heading from "../../../common/Heading";
import SubHeading from "../../../common/subheading";
import axios from "axios";
import { BASE_URL, HOTELS_URL } from "../../../constants/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SpinnerLoading from "../../../common/spinner-loading";
import FormWarning from "../../../common/form-warning";

function HotelsTable() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [hotelsState, setHotelsState] = useState({
		title: "",
	});

	useEffect(() => {
		axios
			.get(HOTELS_URL)
			.then((response) => {
				console.log(response);
				setHotels(response.data);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
			});
	}, []);

	const schema = yup.object().shape({
		title: yup.string().required("Please enter title"),
		password: yup.string().required("Please enter your password"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function handleTitleChange(e) {
		setHotelsState({ title: e.target.value });
		console.log(hotelsState);
	}

	async function onSubmit(event) {
		event.preventDefault();

		console.log("ADSSDASDASAD", event);

		// setSubmitting(true);
		// setSubmitError(null);
		// const dataLogin = { identifier: data.email, password: data.password };

		// try {
		// 	const response = await axios.post("url", dataLogin);
		// 	console.log("response", response.data);
		// 	// setAuth(response.data);
		// } catch (error) {
		// 	console.log("error", error);
		// 	setSubmitError(error.message.toString());
		// } finally {
		// 	setSubmitting(false);
		// }
	}

	return (
		<>
			<Heading header={"Hotels"} />
			<SubHeading header={"Review, add or remove hotels on the website"} />

			<>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col">Id</th>
							<th scope="col">Title</th>
							{/* <th scope="col">Description</th> */}
							<th scope="col">Price</th>
							<th scope="col">Featured</th>
						</tr>
					</thead>
					<tbody>
						{hotels &&
							hotels.map((hotel, index) => {
								return (
									<React.Fragment key={index}>
										<tr className="align-middle">
											<td className="d-none d-md-table-cell">
												<img src={hotel.image[0].url} width="70px" />
											</td>
											<td>{hotel.id}</td>
											<td>{hotel.title}</td>
											<td>{hotel.price}</td>
											<td>
												<input type="checkbox" checked={hotel.featured} disabled className="form-check-input" />
											</td>
											<td>
												<button
													data-id={hotel.id}
													type="button"
													className="btn btn-sm btn-info"
													data-bs-toggle="collapse"
													data-bs-target={"#hotel-" + hotel.id}
													aria-expanded="false"
													aria-controls="editHotel"
													title="Edit hotel"
												>
													<i className="far fa-edit"></i>
												</button>
											</td>
										</tr>

										<tr className="collapse" id={"hotel-" + hotel.id}>
											<td colSpan="6" className="p-0 m-0">
												<form
													id={"form-" + hotel.id}
													form={"form-" + hotel.id}
													onSubmit={onSubmit}
													className="card-body bg-white p-md-2 m-0 row form-update"
												>
													<fieldset disabled={submitting}>
														<h2 className="fs-5 mb-2 mt-2">Edit hotel</h2>
														<div className="col-auto mb-3">
															<label htmlFor={"input-title-" + hotel.id} className="form-label">
																Title
															</label>
															<input
																name="title"
																type="text"
																className="form-control"
																value={hotelsState.title}
																onChange={handleTitleChange}
																required
																// {...register("title", { required: true })}
															/>
															{/* {errors.title && <FormWarning>{errors.title.message} DASDSASAD</FormWarning>} */}
														</div>

														<button type="submit" form={"form-" + hotel.id} className="w-100 btn btn-success">
															{submitting ? "Updating" : "Update"} {submitting && <SpinnerLoading />}
														</button>
														{/* <div id="message-update-${product.id}" className="mt-3"></div> */}
													</fieldset>
												</form>
											</td>
										</tr>
									</React.Fragment>
								);
							})}
					</tbody>
				</table>
				{/* <div class="modal" id="exampleModal" tabindex="-1">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Modal title</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div> */}
			</>
		</>
	);
}

export default HotelsTable;
