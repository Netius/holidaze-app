import React from "react";
import PropTypes from "prop-types";

export default function ValidationError({ children }) {
	return (
		<div className="alert alert-danger m-3" role="alert">
			{children}
		</div>
	);
}

ValidationError.proptTypes = {
	children: PropTypes.node.isRequired,
};
