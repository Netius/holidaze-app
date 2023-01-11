import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import HotelsTable from "./hotels/hotels_table";

function AdminPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) navigate("/login");
	});

	return (
		<>
			<div className="container">
				<HotelsTable />
			</div>
		</>
	);
}

export default AdminPage;
