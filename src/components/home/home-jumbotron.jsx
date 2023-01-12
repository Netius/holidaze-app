import React from "react";
import Bergen from "../../images/bergen-filter2.jpg";

function HomeJumbotron() {
	return (
		<div className="p-5 mb-4 hero__image" style={{ backgroundImage: `url(${Bergen})` }}>
			<div className="container-fluid py-5 text-center text-white">
				<h1 className="display-5 fw-bold">Custom jumbotron</h1>
				<p className="col-md-8 fs-4">
					Using a series of utilities, you can create this jumbotron, just like the one in previous
					versions of Bootstrap. Check out the examples below for how you can remix and restyle it to
					your liking.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
	);
}

export default HomeJumbotron;
