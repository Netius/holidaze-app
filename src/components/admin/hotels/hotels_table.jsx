import React, { useEffect, useState } from "react";
import Heading from "../../../common/Heading";
import SubHeading from "../../../common/subheading";
import axios from "axios";
import { HOTELS_URL } from "../../../constants/api";
import ModalHotels from "../../modal/modal-hotels";
import ModalDelete from "../../modal/modal-delete";
import FormError from "../../../common/form-error";
import { Link } from "react-router-dom";

function HotelsTable() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [hotelsState, setHotelsState] = useState({});
	const [hotelsDelete, setHotelsDelete] = useState({});

	const getHotels = async () => {
		await axios
			.get(HOTELS_URL)
			.then((response) => {
				setHotels(response.data);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
			});
	};

	useEffect(() => {
		getHotels();
	}, []);

	return (
		<>
			<Heading header={"Hotels"} />
			<SubHeading header={"Review, add or remove hotels on the website"} />
			<button
				type="button"
				className="btn btn-sm btn-success float-end"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				aria-expanded="false"
				aria-controls="addHotel"
				title="Add hotel"
				onClick={() => setHotelsState({})}
			>
				<i className="fa fa-plus me-2 "></i>
				Add a hotel
			</button>

			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col" className="d-none d-md-table-cell">
							Image
						</th>
						<th scope="col">Id</th>
						<th scope="col">Title</th>
						<th scope="col">Price</th>
						<th scope="col">Featured</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{hotels &&
						hotels.map((hotel, index) => {
							return (
								<React.Fragment key={index}>
									<tr className="align-middle">
										<td className="d-none d-md-table-cell">
											<img src={hotel.image[0]?.url} width="70px" alt={hotel.title} />
										</td>
										<td>{hotel.id}</td>
										<td>
											<Link to={`/details/${hotel.id}`} className="link-primary">
												{hotel.title}
											</Link>
										</td>
										<td>{hotel.price}</td>
										<td>
											<input type="checkbox" checked={hotel.featured} disabled className="form-check-input" />
										</td>
										<td>
											<button
												type="button"
												className="btn btn-sm btn-primary"
												data-bs-toggle="modal"
												data-bs-target="#exampleModal"
												aria-expanded="false"
												aria-controls="editHotel"
												title="Edit hotel"
												onClick={() => setHotelsState(hotel)}
											>
												<i className="far fa-edit"></i>
											</button>
											<button
												type="button"
												className="btn btn-sm btn-danger ms-2"
												data-bs-toggle="modal"
												data-bs-target="#deleteModal"
												aria-expanded="false"
												aria-controls="deleteHotel"
												title="Delete hotel"
												onClick={() => setHotelsDelete(hotel)}
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

			<ModalHotels hotelsState={hotelsState} getHotels={getHotels} />
			<ModalDelete hotelsState={hotelsState} getHotels={getHotels} />
		</>
	);
}

export default HotelsTable;
