import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../common/pageTitle";
import AuthContext from "../../context/AuthContext";
import HotelsTable from "./hotels/hotels_table";
import MessagesTable from "./reviews/messages-table";

function AdminPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) navigate("/login");
	});

	return (
		<>
			<div className="container">
				<PageTitle header={"Admin"} />
				<HotelsTable />
				<MessagesTable />
			</div>
		</>
	);
}

export default AdminPage;
