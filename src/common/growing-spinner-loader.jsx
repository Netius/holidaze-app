import React from "react";

function GrowingSpinnerLoader() {
	return (
		<>
			<div className="alert alert-info mt-3" role="alert">
				<span>Loading </span>
				<div className="spinner-grow spinner-grow-sm me-1" role="status"></div>
				<div className="spinner-grow spinner-grow-sm me-1" role="status"></div>
				<div className="spinner-grow spinner-grow-sm me-1" role="status"></div>
			</div>
		</>
	);
}

export default GrowingSpinnerLoader;
