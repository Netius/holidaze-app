import React from "react";
import PropTypes from "prop-types";

export default function ValidationError({ children }) {
	return <p className="text-danger mt-2">{children}</p>;
}

ValidationError.proptTypes = {
	children: PropTypes.node.isRequired,
};
