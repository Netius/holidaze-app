import React from "react";
import Bergen from "../../images/bergen-night.jpg";

function HomeJumbotron() {
	return (
		<div className="p-5 mb-4 hero__image" style={{ backgroundImage: `url(${Bergen})` }}>
			<div className="container-fluid py-5 text-center text-white">
				<h1 className="display-5 fw-bold ">Hotels in Bergen</h1>

				<div class="container  py-4">
					<div class="row mt-5">
						<div class="col-md-6 mx-auto">
							<div class="input-group">
								<input
									class="form-control border-end-0 border"
									type="search"
									// value="search"
									placeholder="e.g. Hotel Bergen"
									id="search-input"
								/>
								<span class="input-group-append">
									<button
										class="btn btn-outline-secondary  bg-white border-start-0 border-bottom-0 border ms-n5"
										type="button"
									>
										<i class="fa fa-search"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
					<div className="d-grid col-3 mx-auto">
						<button className="btn hotel-card__read  btn-lg mt-4 shadow" type="button">
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeJumbotron;
