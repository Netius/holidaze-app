import React, { useEffect, useState } from "react";
import Heading from "../../../common/Heading";
import SubHeading from "../../../common/subheading";
import axios from "axios";
import { BASE_URL, HOTELS_URL } from "../../../constants/api";

function HotelsTable() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:1337/hotels")
			.then((response) => {
				console.log(response);
				setHotels(response.data);
				// console.log(hotels);
			})
			.catch((error) => {
				setError(error);
				console.log(error);
			});
	}, []);
	console.log(hotels);
	return (
		<>
			<Heading header={"Hotels"} />
			<SubHeading header={"Review, add or remove hotels on the website"} />

			<>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col">Title</th>
							<th scope="col">Description</th>
							<th scope="col">Price</th>
							<th scope="col">Featured</th>
						</tr>
					</thead>
					<tbody>
						{hotels &&
							hotels.map((hotel, index) => {
								return (
									<tr key={index} className="align-middle">
										<td className="d-none d-md-table-cell">
											<img src={hotel.image[0].url} width="70px" />
										</td>
										<td>{hotel.title}</td>
										<td>{hotel.description}</td>
										<td>{hotel.price}</td>
										<td>
											<input type="checkbox" checked={hotel.featured} disabled className="form-check-input" />
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</>
		</>
	);
}

export default HotelsTable;
