import React, { useState } from "react";
import Bergen from "../../images/bergen-night.jpg";
import { Typeahead } from "react-bootstrap-typeahead";
import { useNavigate } from "react-router-dom";

function HomeJumbotron({ setText, hotels }) {
	const [selected, setSelected] = useState([]);
	const navigate = useNavigate();

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
									navigate("details/" + result[0].hotelId);
									setSelected(result);
								}}
								options={hotels.map(hotel => ({...hotel.attributes, hotelId: hotel.id}) )}
								selected={selected}
								renderMenuItemChildren={(option) => (
									<div key={option}>
										<img
											alt={option.title}
											src={option.image_url}
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
		</div>
	);
}

export default HomeJumbotron;
