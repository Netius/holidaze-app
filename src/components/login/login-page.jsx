import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";

function LoginPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) navigate("/admin");
	});

	return (
		<>
			<Heading header={"Login"} />
		</>
	);
}

export default LoginPage;
