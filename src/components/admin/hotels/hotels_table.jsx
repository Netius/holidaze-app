import React, { useEffect, useState } from "react";
import Heading from "../../../common/Heading";
import SubHeading from "../../../common/subheading";
import axios from "axios";
import { HOTELS_URL } from "../../../constants/api";
import ModalHotels from "../../modal/modal-hotels";
import ModalDelete from "../../modal/modal-delete";
import FormError from "../../../common/form-error";
import { Link } from "react-router-dom";
import GrowingSpinnerLoader from "../../../common/growing-spinner-loader";
import NoHotelImage from "../../../images/no-hotel-image.jpg";

function HotelsTable() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [hotelsState, setHotelsState] = useState({});
	const [loading, setLoading] = useState(false);

	const getHotels = async () => {
		setLoading(true);
		await axios
			.get(HOTELS_URL)
			.then((response) => {
				setHotels(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
				setLoading(false);
			});
	};

	useEffect(() => {
		getHotels();
	}, []);

	return (
		<>
			<Heading header={"Hotels"} />
			<SubHeading header={"Add, edit or remove hotels on the website"} />
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
											<img src={hotel.attributes.image_url || NoHotelImage} width="70px" alt={hotel.attributes.title} />
										</td>
										<td>{hotel.id}</td>
										<td>
											<Link to={`/details/${hotel.id}`} className="link-primary">
												{hotel.attributes.title}
											</Link>
										</td>
										<td>{hotel.attributes.price}</td>
										<td>
											<input type="checkbox" checked={hotel.attributes.featured} disabled className="form-check-input" />
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
												onClick={() => setHotelsState(hotel)}
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

			<ModalHotels hotelsState={hotelsState} getHotels={getHotels} />
			<ModalDelete hotelsState={hotelsState} getHotels={getHotels} />
		</>
	);
}

export default HotelsTable;
