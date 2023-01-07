import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import AuthContext from "../../context/AuthContext";

function AdminPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) navigate("/login");
	});

	return (
		<>
			<div className="container-fluid text-center">
				<Heading header={"Admin"} />
				<ul>
					<li>{auth?.user.email}</li>
					<li>{auth?.user.username}</li>
					<li className="text-break">{auth?.token}</li>
				</ul>
			</div>
		</>
	);
}

export default AdminPage;
