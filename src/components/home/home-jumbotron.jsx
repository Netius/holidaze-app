import React, { useRef } from "react";
import Bergen from "../../images/bergen-night.jpg";

function HomeJumbotron({ setText }) {
	const inputRef = useRef(null);

	return (
		<div className="p-5 mb-4 hero__image" style={{ backgroundImage: `url(${Bergen})` }}>
			<div className="container-fluid py-5 text-center text-white">
				<h1 className="display-5 fw-bold ">Hotels in Bergen</h1>

				<div className="container  py-4">
					<div className="row mt-5">
						<div className="col-md-6 mx-auto">
							<div className="input-group">
								<input
									ref={inputRef}
									className="form-control border-end-0 border"
									type="search"
									placeholder="e.g. Hotel Bergen"
									id="search-input"
									onChange={(e) => setText(e.target.value)}
								/>
								<span className="input-group-append">
									<button
										className="btn btn-outline-secondary  bg-white border-start-0 border-bottom-0 border ms-n5"
										type="button"
									>
										<i className="fa fa-search"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
					<div className="d-grid col-3 mx-auto">
						<button
							className="btn hotel-card__read  btn-lg mt-4 shadow"
							type="button"
							onClick={() => setText(inputRef.current.value)}
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeJumbotron;
