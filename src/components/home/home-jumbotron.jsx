import React, { useEffect, useState } from "react";
import axios from "axios";
import Bergen from "../../images/bergen-night.jpg";
import { Typeahead } from "react-bootstrap-typeahead";
import { HOTELS_URL } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import FormError from "../../common/form-error";

function HomeJumbotron({ setText }) {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [selected, setSelected] = useState([]);
	const navigate = useNavigate();

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
		<div className="p-5 mb-4 hero__image" style={{ backgroundImage: `url(${Bergen})` }}>
			<div className="container-fluid py-5 text-center text-white">
				<h1 className="display-5 fw-bold ">Hotels in Bergen</h1>

				<div className="container  py-4">
					<div className="row mt-5">
						<div className="col-md-6 mx-auto">
							<Typeahead
								size={"lg"}
								highlightOnlyResult
								labelKey="title"
								id={"search-hotels"}
								emptyLabel={"No hotel with that name..."}
								clearButton
								placeholder="e.g. Hotel Bergen"
								onChange={(result) => {
									navigate("details/" + result[0].id);
									setSelected(result);
								}}
								options={hotels}
								selected={selected}
								renderMenuItemChildren={(option) => (
									<div key={option.id}>
										<img
											alt={option.title}
											src={option.image[0]?.url}
											style={{
												height: "30px",
												marginRight: "10px",
												width: "30px",
												borderRadius: "5px",
											}}
										/>
										<span>{option.title}</span>
									</div>
								)}
							>
								<i className="fa fa-search ms-n5 fa-lg"></i>
							</Typeahead>
						</div>
					</div>
				</div>
			</div>
			{error && <FormError>{error}</FormError>}
		</div>
	);
}

export default HomeJumbotron;
