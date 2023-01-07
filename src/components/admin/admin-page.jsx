import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";
import AuthContext from "../../context/AuthContext";
import HotelsTable from "./hotels/hotels_table";

function AdminPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(auth.user);
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
