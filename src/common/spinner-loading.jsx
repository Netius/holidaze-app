import React from "react";

function SpinnerLoading() {
	return (
		<div className="spinner-border spinner-border-sm text-light" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}

export default SpinnerLoading;
